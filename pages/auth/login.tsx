import React from "react";
import { useRouter } from "next/router";

import { InfoForm } from "@components/form";
import { Layout } from "@components/layout";
import { AuthWrap } from "@components/auth";
import { ProvidersList } from "@components/form";
import { getProviders } from "next-auth/react";

import { ProviderProps } from "@interfaces/auth";

interface LoginPageProps {
    providers: Array<ProviderProps>;
}

const LoginPage: React.FC<LoginPageProps> = ({ providers }) => {
    const { query } = useRouter();
    return (
        <Layout header_type="auth_register">
            <AuthWrap title="Log in">
                {query.error ? (
                    <InfoForm>
                        {query.error === "OAuthCallback"
                            ? "Perhaps your social network does not have an email address specified. Email address is required."
                            : query.error}
                    </InfoForm>
                ) : null}
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
