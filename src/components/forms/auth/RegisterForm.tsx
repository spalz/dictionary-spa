import React, { useState } from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
// import { DevTool } from "@hookform/devtools";

import { IconNight } from "@components/icons";
import { Wrapper } from "@components/layout";
import {
    FormInputField,
    FormPasswordField,
    PersonalDataForm,
    BlockForm,
    InfoForm,
    ButtonForm,
    tabindex,
    AuthBottomLink,
    ProvidersList,
} from "@components/form";
import { AuthLoginEmailR } from "@utils/routes";
import {
    yup_username,
    yup_email,
    yup_password,
} from "@components/form/yup_fields";
import { ProviderProps } from "@interfaces/auth";

type RegisterFormValues = {
    username: string;
    email: string;
    password: string;
};

const FormSchema = () =>
    Yup.object().shape({
        username: yup_username(),
        email: yup_email(),
        password: yup_password(),
    });

interface RegisterFormProps {
    providers: Array<ProviderProps>;
    csrfToken: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    providers,
    csrfToken,
}) => {
    const [authError, setAuthError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<RegisterFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
    });

    const onSubmit = (data: RegisterFormValues) => {
        setIsLoading(true);
        signIn("register", {
            redirect: false,
            username: data.username,
            email: data.email,
            password: data.password,
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
            .then((error) => {
                if (error?.ok === false) {
                    const error_text = JSON.parse(error.error || "");
                    setIsLoading(false);
                    setAuthError(error_text.error.message);
                }
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="hidden"
                    defaultValue={csrfToken}
                    name="csrfToken"
                />
                <BlockForm
                    success={false}
                    success_icon={<IconNight />}
                    success_title="Success title"
                    success_text="Success text"
                >
                    <ProvidersList providers={providers} compact />

                    {authError ? <InfoForm>{authError}</InfoForm> : null}
                    <div>
                        <Controller
                            render={({ field }) => (
                                <FormInputField
                                    id={tabindex.register + 1}
                                    error={errors.username}
                                    label="Name"
                                    required={true}
                                    {...field}
                                />
                            )}
                            name="username"
                            control={control}
                            defaultValue=""
                        />
                        <Controller
                            render={({ field }) => {
                                return (
                                    <FormInputField
                                        id={tabindex.register + 2}
                                        error={errors.email}
                                        type="email"
                                        label="Email"
                                        required={true}
                                        {...field}
                                    />
                                );
                            }}
                            name="email"
                            control={control}
                            defaultValue=""
                        />
                        <Controller
                            render={({ field }) => {
                                return (
                                    <FormPasswordField
                                        id={tabindex.register + 3}
                                        error={errors.password}
                                        label="Password"
                                        required={true}
                                        {...field}
                                    />
                                );
                            }}
                            name="password"
                            control={control}
                            defaultValue=""
                        />
                    </div>
                    <Wrapper offset={["bottom-20"]}>
                        <ButtonForm
                            tabIndex={tabindex.register + 4}
                            disabled={!isValid}
                            loading={isLoading}
                        >
                            Register
                        </ButtonForm>
                    </Wrapper>
                    <AuthBottomLink
                        text="Already have an account? "
                        title="Log in"
                        href={AuthLoginEmailR()}
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

export default RegisterForm;
