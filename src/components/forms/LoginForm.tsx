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
import { AuthRegisterEmailR } from "@utils/routes";
import {
    yup_username,
    yup_email,
    yup_password,
} from "@components/form/yup_fields";
import { ProviderProps } from "@interfaces/auth";

type LoginFormValues = {
    identifier: string;
    password: string;
};

const FormSchema = () =>
    Yup.object().shape({
        identifier: yup_email(),
        password: yup_password(),
    });

const error = false;

interface LoginFormProps {
    providers: Array<ProviderProps>;
    csrfToken: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ providers, csrfToken }) => {
    const [authError, setAuthError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
    });

    const onSubmit = (data: any) => {
        setIsLoading(true);
        signIn("login", {
            redirect: false,
            identifier: data.identifier,
            password: data.password,
            callbackUrl: `${window.location.origin}`,
        })
            .then((res: any) => {
                if (res.ok && res.status === 200) {
                    router.push(res.url);
                } else {
                    return res;
                }
            })
            .then((err) => {
                if (!err?.ok) {
                    setIsLoading(false);
                    setAuthError(true);
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
                    {authError ? (
                        <InfoForm>Invalid username or password.</InfoForm>
                    ) : null}

                    <ProvidersList providers={providers} compact />

                    <div>
                        <Controller
                            render={({ field }) => {
                                return (
                                    <FormInputField
                                        id={tabindex.register + 2}
                                        error={errors.identifier}
                                        type="email"
                                        label="Email"
                                        {...field}
                                    />
                                );
                            }}
                            name="identifier"
                            control={control}
                        />
                        <Controller
                            render={({ field }) => {
                                return (
                                    <FormPasswordField
                                        id={tabindex.register + 3}
                                        error={errors.password}
                                        label="Password"
                                        {...field}
                                    />
                                );
                            }}
                            name="password"
                            control={control}
                        />
                    </div>
                    <Wrapper offset={["bottom-20"]}>
                        <ButtonForm
                            tabIndex={tabindex.register + 4}
                            disabled={!isValid}
                            loading={isLoading}
                        >
                            Log in
                        </ButtonForm>
                    </Wrapper>
                    <AuthBottomLink
                        text="No account? "
                        title="Sign up"
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

export default LoginForm;
