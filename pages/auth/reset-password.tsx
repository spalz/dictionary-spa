import React from "react";

import { Layout } from "@components/layout";
import { AuthWrap } from "@components/auth";
import { ResetPasswordForm } from "@components/forms";

const LoginPage = () => {
    return (
        <Layout header_type="auth_login">
            <AuthWrap title="Reset password">
                <ResetPasswordForm />
            </AuthWrap>
        </Layout>
    );
};

export default LoginPage;
