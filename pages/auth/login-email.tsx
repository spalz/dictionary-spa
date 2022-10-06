import React from "react";

import { AuthWrap } from "@components/auth";
import { Layout } from "@components/layout";
import { LoginForm } from "@components/forms";
import { getProviders, getCsrfToken } from "next-auth/react";

interface LoginEmailProps {
    providers: Array<{
        callbackUrl: string;
        id: string;
        name: string;
        signinUrl: string;
        type: string;
    }>;
    csrfToken: string;
}

const LoginEmail: React.FC<LoginEmailProps> = ({ providers, csrfToken }) => {
    return (
        <Layout header_type="auth_register">
            <AuthWrap title="Log in">
                <LoginForm providers={providers} csrfToken={csrfToken} />
            </AuthWrap>
        </Layout>
    );
};

export async function getServerSideProps(context: any) {
    const providers = await getProviders();
    const csrfToken = await getCsrfToken(context);
    return {
        props: {
            providers,
            csrfToken,
        },
    };
}

export default LoginEmail;
