import React, { memo } from "react";
import styled from "styled-components";
import { position } from "polished";

import {
    HeaderLogo,
    HeaderTheme,
    HeaderAuth,
    HeaderMenu,
} from "@components/header";
import { Container } from "@components/layout";
import { global, colors } from "@styles/vars";

export type HEADER_TYPES = "default" | "auth_login" | "auth_register";

export interface HeaderProps {
    header_type?: HEADER_TYPES;
}

let Header: React.FC<HeaderProps> = ({ header_type = "default" }) => {
    return (
        <SHeader>
            <Container>
                <SBlock>
                    <HeaderLogo />
                    {header_type === "default" && <HeaderMenu />}
                    <HeaderAuth header_type={header_type} />
                    <HeaderTheme />
                </SBlock>
            </Container>
        </SHeader>
    );
};

const SHeader = styled.header`
    pointer-events: none;
`;
const SBlock = styled.div`
    display: flex;
    align-items: center;
    height: ${global?.header_height};
    position: relative;
    > div {
        pointer-events: all;
    }
    a {
        color: ${colors?.typo_primary};
        &:hover {
            color: ${colors?.typo_link};
        }
    }
`;

export default Header;
