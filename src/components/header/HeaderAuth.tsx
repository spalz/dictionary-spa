import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";

import { BaseButton } from "@components/elements";
import { spacings, fonts } from "@styles/vars";
import { AuthLoginEmailR, AuthLoginR, AuthRegisterEmailR } from "@utils/routes";
import { LinkButton } from "@components/elements";

import { HEADER_TYPES } from "@components/header/Header";

export interface HeaderAuthProps {
    header_type?: HEADER_TYPES;
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ header_type }) => {
    const { data: session } = useSession();

    if (session) {
        return (
            <SHeaderAuth>
                <a href="#">{session.user.name}</a>
                <BaseButton
                    size="small"
                    style="ghost_stroke"
                    onClick={() =>
                        signOut({ callbackUrl: `${window.location.origin}` })
                    }
                >
                    Sign out
                </BaseButton>
            </SHeaderAuth>
        );
    }
    return (
        <SHeaderAuth>
            {header_type === "auth_register" ? (
                <LinkButton
                    href={AuthRegisterEmailR()}
                    size="small"
                    style="primary"
                >
                    Sign up
                </LinkButton>
            ) : header_type === "auth_login" ? (
                <LinkButton
                    href={AuthLoginEmailR()}
                    size="small"
                    style="primary"
                >
                    Sign in
                </LinkButton>
            ) : (
                <LinkButton href={AuthLoginR()} size="small" style="primary">
                    Sign in
                </LinkButton>
            )}
        </SHeaderAuth>
    );
};

const SHeaderAuth = styled.div`
    display: flex;
    align-items: center;
    > a,
    > div {
        margin-right: ${spacings?.offset_10};
        /* font-size: ${fonts?.fs_14}; */
        font-weight: ${fonts?.fw_medium};
    }
    margin-left: auto;
`;

export default HeaderAuth;
