import React from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { AuthLoginR } from "@utils/routes";
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

const error = false;

interface RegisterFormProps {
    providers: Array<ProviderProps>;
    csrfToken: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    providers,
    csrfToken,
}) => {
    const {
        control,
        formState: { errors, isValid },
    } = useForm<RegisterFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
    });

    return (
        <>
            <form action="/api/auth/callback/register" method="post">
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

                    {error ? <InfoForm>error</InfoForm> : null}
                    <div>
                        <Controller
                            render={({ field }) => (
                                <FormInputField
                                    id={tabindex.register + 1}
                                    error={errors.username}
                                    label="Name"
                                    {...field}
                                />
                            )}
                            name="username"
                            control={control}
                        />
                        <Controller
                            render={({ field }) => {
                                return (
                                    <FormInputField
                                        id={tabindex.register + 2}
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
                        >
                            Register
                        </ButtonForm>
                    </Wrapper>
                    <AuthBottomLink
                        text="Already have an account? "
                        title="Log in"
                        href={AuthLoginR()}
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
