import React from "react";

import { Layout } from "@components/layout";
import { LoginForm } from "@components/forms";
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
            <LoginForm providers={providers} />
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
