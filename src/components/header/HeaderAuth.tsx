import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";

import { BaseButton } from "@components/elements";
import { spacings, fonts } from "@styles/vars";
import { AuthLoginR } from "@utils/routes";
import { LinkButton } from "@components/elements";

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
            <LinkButton href={AuthLoginR()} size="small" style="primary">
                Sign in
            </LinkButton>
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
