import React from "react";
import styled from "styled-components";

import { Container } from "@components/layout";
import { SOffsetStyle } from "@styles/global_style";

interface BaseButton {
    container: boolean;
    offset: Array<
        | "top-120"
        | "bottom-120"
        | "top-80"
        | "bottom-80"
        | "top-40"
        | "bottom-40"
        | "top-20"
        | "bottom-20"
        | "top-0"
        | "bottom-0"
    >;
    children: React.ReactNode;
    align: "left" | "center";
}

const Wrapper: React.FC<BaseButton> = ({
    container = false,
    children,
    offset,
    align = "left",
}) => {
    const offset_list = offset ? offset.join(" ") : "";
    return (
        <SOffsetStyle className={`${offset_list}`}>
            <SWrapper className={`${align}`}>
                {container ? <Container>{children}</Container> : children}
            </SWrapper>
        </SOffsetStyle>
    );
};

const SWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    &.center {
        display: flex;
        justify-content: center;
    }
`;

export default Wrapper;
