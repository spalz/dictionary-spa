import React from "react";
import CN from "classnames";
import styled, { css } from "styled-components";

import { down } from "@config/breakpoints_vars";
import { fonts } from "@styles/vars";
import { SOffsetStyle } from "@styles/global_style";

interface Headline {
    level?: 1 | 2 | 3 | 4;
    size?: "tiny" | "small" | "mid" | "large" | "huge";
    offset?: Array<
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
}

const Headline: React.FC<Headline> = ({
    level = 2,
    size = "mid",
    offset = ["bottom-40"],
    children,
}) => {
    const headline_size = `size__${size}`;
    const offset_list = offset ? offset.join(" ") : "";
    const classnames = CN(headline_size, offset_list);
    return (
        <SOffsetStyle className={offset_list}>
            {level === 1 && <H1 className={classnames}>{children}</H1>}
            {level === 2 && <H2 className={classnames}>{children}</H2>}
            {level === 3 && <H3 className={classnames}>{children}</H3>}
            {level === 4 && <H4 className={classnames}>{children}</H4>}
        </SOffsetStyle>
    );
};

const headline_style = css`
    line-height: 1.4;
    &.size__tiny {
        font-size: ${fonts?.fs_18};
    }
    &.size__small {
        font-size: ${fonts?.fs_20};
    }
    &.size__mid {
        font-size: ${fonts?.fs_24};
    }
    &.size__large {
        font-size: ${fonts?.fs_32};
        ${down("xl")} {
        }
        ${down("lg")} {
        }
        ${down("md")} {
            font-size: ${fonts?.fs_24};
        }
    }
    &.size__huge {
        font-size: ${fonts?.fs_48};
        ${down("xl")} {
        }
        ${down("lg")} {
            font-size: ${fonts?.fs_30};
        }
        ${down("md")} {
            font-size: ${fonts?.fs_24};
        }
    }
    &.mono {
        font-family: ${fonts?.ff_mono};
    }
    &.uppercase {
        text-transform: uppercase;
    }
    &.regular {
        font-weight: ${fonts?.fw_regular};
    }
    &.medium {
        font-weight: ${fonts?.fw_medium};
    }
    &.bold {
        font-weight: ${fonts?.fw_bold};
    }
    u {
        display: block;
    }
`;

const H1 = styled.h1`
    ${headline_style};
`;
const H2 = styled.h2`
    ${headline_style};
`;
const H3 = styled.h3`
    ${headline_style};
`;
const H4 = styled.h4`
    ${headline_style};
`;

export default Headline;
