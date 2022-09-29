import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";
import { BaseButton } from "@components/elements";

import { spacings, fonts, colors } from "@styles/vars";

const HeaderAuth = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <SHeaderAuth>
                <a href="#">{session.user.name}</a>
                <BaseButton
                    size="small"
                    style="ghost_stroke"
                    onClick={() => signOut()}
                >
                    Sign out
                </BaseButton>
            </SHeaderAuth>
        );
    }
    return (
        <SHeaderAuth>
            <BaseButton size="small" style="primary" onClick={() => signIn()}>
                Sign in
            </BaseButton>
        </SHeaderAuth>
    );
};

const SHeaderAuth = styled.div`
    display: flex;
    align-items: center;
    a {
        padding-right: ${spacings?.offset_10};
        font-size: ${fonts?.fs_14};
        font-weight: ${fonts?.fw_medium};
    }
    margin-left: auto;
`;

export default HeaderAuth;
