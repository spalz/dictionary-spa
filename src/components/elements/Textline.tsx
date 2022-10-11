import React from "react";
import CN from "classnames";
import styled from "styled-components";

import { SOffsetStyle } from "@styles/global_style";
import { down } from "@config/breakpoints_vars";
import { colors, fonts } from "@styles/vars";

interface TextlineProps {
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
        | "top-10"
        | "bottom-10"
        | "top-0"
        | "bottom-0"
    >;
    align?: "left" | "center";
    children: React.ReactNode;
}

const Textline: React.FC<TextlineProps> = ({
    size = "mid",
    offset = ["bottom-0"],
    align = "left",
    children,
}) => {
    const Textline_size = `size__${size}`;
    const offset_list = offset ? offset.join(" ") : "";
    const classnames = CN(Textline_size, align);
    return (
        <SOffsetStyle className={offset_list}>
            <STextline className={classnames}>{children}</STextline>
        </SOffsetStyle>
    );
};

const STextline = styled.div`
    ${down("sm")} {
    }
    &.size__huge {
        font-size: ${fonts?.fs_24};
        ${down("xl")} {
        }
        ${down("lg")} {
        }
        ${down("md")} {
            font-size: ${fonts?.fs_20};
        }
    }
    &.center {
        display: block;
        text-align: center;
    }
    &.size__tiny {
        font-size: ${fonts?.fs_16};
    }
    span {
        color: ${colors?.typo_secondary};
    }
`;

export default Textline;
