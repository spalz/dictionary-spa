import React from "react";

import { Layout } from "@components/layout";
import { AuthWrap } from "@components/auth";
import { ForgotPasswordForm } from "@components/forms";

const LoginPage = () => {
    return (
        <Layout header_type="auth_login">
            <AuthWrap title="Recovery password">
                <ForgotPasswordForm />
            </AuthWrap>
        </Layout>
    );
};

export default LoginPage;
