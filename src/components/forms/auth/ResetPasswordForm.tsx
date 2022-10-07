import React, { useState } from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { RESET_PASSWORD } from "@config/urls";

// import { DevTool } from "@hookform/devtools";

import { Wrapper } from "@components/layout";
import {
    FormPasswordField,
    PersonalDataForm,
    BlockForm,
    InfoForm,
    ButtonForm,
    tabindex,
    AuthBottomLink,
} from "@components/form";
import { AuthRegisterEmailR } from "@utils/routes";
import { yup_new_password } from "@components/form/yup_fields";

type ResetPasswordFormValues = {
    new_password: string;
};

const FormSchema = () =>
    Yup.object().shape({
        new_password: yup_new_password(),
    });

const ResetPasswordForm = ({}) => {
    const [authError, setAuthError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<ResetPasswordFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
    });

    const onSubmit = (data: ResetPasswordFormValues) => {
        setIsLoading(true);
        axios
            .post(
                `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${RESET_PASSWORD}`,
                {
                    code: router.query.code,
                    password: data.new_password,
                    passwordConfirmation: data.new_password,
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    signIn("login", {
                        redirect: false,
                        identifier: response.data.user.email,
                        password: data.new_password,
                        callbackUrl: `${window.location.origin}`,
                    })
                        .then((res) => {
                            if (res?.ok && res?.status === 200 && res.url) {
                                router.push(res.url);
                                return res;
                            } else {
                                return res;
                            }
                        })
                        .then((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((error) => {
                setAuthError(error.response.data.error.name);
                setIsLoading(false);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <BlockForm success={false}>
                    {authError ? (
                        <InfoForm>
                            {authError === "ValidationError"
                                ? "The link is no longer valid"
                                : "Error"}
                        </InfoForm>
                    ) : null}

                    <div>
                        <Controller
                            render={({ field }) => {
                                return (
                                    <FormPasswordField
                                        id={tabindex.reset_password + 1}
                                        error={errors.new_password}
                                        label="New password"
                                        required={true}
                                        {...field}
                                    />
                                );
                            }}
                            name="new_password"
                            control={control}
                        />
                    </div>
                    <Wrapper offset={["bottom-20"]}>
                        <ButtonForm
                            tabIndex={tabindex.reset_password + 2}
                            disabled={!isValid}
                            loading={isLoading}
                        >
                            Save and log in
                        </ButtonForm>
                    </Wrapper>
                    <AuthBottomLink
                        text="Remember your password? "
                        title="Sign in"
                        href={AuthRegisterEmailR()}
                    />
                    <Wrapper offset={["top-20"]}>
                        <PersonalDataForm />
                    </Wrapper>
                </BlockForm>
            </form>
            {/* <DevTool control={control} /> */}
        </>
    );
};

export default ResetPasswordForm;
