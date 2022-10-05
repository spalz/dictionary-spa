import React from "react";

import { Layout } from "@components/layout";
import { AuthWrap } from "@components/auth";
import { ProvidersList } from "@components/form";
import { getProviders } from "next-auth/react";

import { ProviderProps } from "@interfaces/auth";

interface LoginPageProps {
    providers: Array<ProviderProps>;
}

const LoginPage: React.FC<LoginPageProps> = ({ providers }) => {
    return (
        <Layout>
            <AuthWrap title="Log in">
                <ProvidersList providers={providers} />
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

export default LoginPage;
