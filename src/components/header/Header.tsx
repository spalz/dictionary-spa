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
import { down } from "@config/breakpoints_vars";
import { fonts, global, colors } from "@styles/vars";

let Header = () => {
    return (
        <SHeader>
            <Container>
                <SBlock>
                    <HeaderLogo />
                    <HeaderMenu />
                    <HeaderAuth />
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
