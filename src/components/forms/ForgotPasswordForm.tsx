import React, { useState } from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { FORGOT_PASSWORD } from "@config/urls";

import { Wrapper } from "@components/layout";
import {
    FormInputField,
    PersonalDataForm,
    BlockForm,
    InfoForm,
    ButtonForm,
    tabindex,
    AuthBottomLink,
} from "@components/form";
import { AuthRegisterEmailR } from "@utils/routes";
import { yup_email } from "@components/form/yup_fields";

type ForgotPasswordFormValues = {
    email: string;
};

const FormSchema = () =>
    Yup.object().shape({
        email: yup_email(),
    });

const ForgotPasswordForm = ({}) => {
    const [success, setSuccess] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<ForgotPasswordFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
    });

    const onSubmit = (data: ForgotPasswordFormValues) => {
        setIsLoading(true);
        axios
            .post(
                `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${FORGOT_PASSWORD}`,
                {
                    email: data.email,
                }
            )
            .then((response) => {
                console.log(response);
                setSuccess(true);
                setIsLoading(false);
                reset();
            })
            .catch((error) => {
                setAuthError(error.response);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BlockForm success={false}>
                {authError ? (
                    <InfoForm>
                        The user with this email address was not found.
                    </InfoForm>
                ) : null}
                {success ? (
                    <InfoForm type="success">
                        An email with instructions has been sent to your email
                    </InfoForm>
                ) : null}

                <div>
                    <Controller
                        render={({ field }) => {
                            return (
                                <FormInputField
                                    id={tabindex.recovery_password + 1}
                                    error={errors.email}
                                    type="email"
                                    label="Email"
                                    {...field}
                                />
                            );
                        }}
                        name="email"
                        control={control}
                    />
                </div>
                <Wrapper offset={["bottom-20"]}>
                    <ButtonForm
                        tabIndex={tabindex.recovery_password + 2}
                        disabled={!isValid}
                        loading={isLoading}
                    >
                        Send
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
    );
};

export default ForgotPasswordForm;
