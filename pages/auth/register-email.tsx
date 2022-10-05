import React from "react";

import { AuthWrap } from "@components/auth";
import { Layout } from "@components/layout";
import { RegisterForm } from "@components/forms";
import { getProviders } from "next-auth/react";

interface LoginEmailProps {
    providers: Array<{
        callbackUrl: string;
        id: string;
        name: string;
        signinUrl: string;
        type: string;
    }>;
}

const LoginEmail: React.FC<LoginEmailProps> = ({ providers }) => {
    return (
        <Layout>
            <AuthWrap title="Register">
                <RegisterForm providers={providers} />
            </AuthWrap>
        </Layout>
    );
};

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
}

export default LoginEmail;
