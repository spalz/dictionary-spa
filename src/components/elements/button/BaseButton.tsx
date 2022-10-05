import React from "react";
import CN from "classnames";
import styled from "styled-components";

import { Loader } from "@components/elements";
import {
    primary,
    primary_stroke,
    secondary,
    ghost,
    ghost_stroke,
} from "./button_styles";
import { down } from "@config/breakpoints_vars";
import { colors, fonts, global } from "@styles/vars";

export interface BaseButtonProps {
    style?:
        | "primary"
        | "primary_stroke"
        | "secondary"
        | "ghost"
        | "ghost_stroke";

    size?: "small" | "mid" | "large";
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    left_icon?: React.ReactNode;
    right_icon?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
    tabIndex?: number;
}

const BaseButton: React.FC<BaseButtonProps> = ({
    style = "primary",
    size = "mid",
    disabled = false,
    loading = false,
    left_icon,
    right_icon,
    children,
    onClick,
    block = false,
    tabIndex,
}) => {
    return (
        <SBaseButton
            onClick={onClick}
            tabIndex={tabIndex}
            className={CN(`button button__${size} ${style}`, {
                disabled: disabled,
                loading: loading,
                block: block,
            })}
        >
            <SInfo>
                {left_icon ? <SIcon className="left">{left_icon}</SIcon> : null}
                <SText>{children}</SText>
                {right_icon ? (
                    <SIcon className="right">{right_icon}</SIcon>
                ) : null}
            </SInfo>
            {loading ? <Loader type="absolute" size="small" /> : null}
        </SBaseButton>
    );
};

const SBaseButton = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: none;
    border-style: solid;
    position: relative;
    transition: all ${global?.transition};
    font-family: ${fonts?.ff_base};
    border-width: ${global?.border_width};
    border-radius: ${global?.border_radius_big};
    &.block {
        display: flex;
        width: 100%;
    }
    ////////////////////
    &.button__small {
        height: 34px;
        padding: 0 0.5em;
        font-size: ${fonts?.fs_16};
        font-weight: ${fonts?.fw_regular};
        ${down("sm")} {
            padding: 0 1.1em;
            height: 40px;
            font-size: ${fonts?.fs_16};
        }
    }
    &.button__mid {
        height: 46px;
        padding: 0 1em;
        font-size: ${fonts?.fs_18};
        font-weight: ${fonts?.fw_regular};
        ${down("sm")} {
            padding: 0 1.1em;
            height: 40px;
            font-size: ${fonts?.fs_16};
        }
    }
    &.button__large {
        height: 58px;
        padding: 0 1.2em;
        font-size: ${fonts?.fs_18};
        font-weight: ${fonts?.fw_medium};
        ${down("sm")} {
            height: 48px;
            padding: 0 1.1em;
            font-size: ${fonts?.fs_18};
        }
    }
    ${primary};
    ${primary_stroke};
    ${secondary};
    ${ghost};
    ${ghost_stroke};
    ////////////////////
    &.disabled,
    &.loading {
        pointer-events: none;
        background-color: ${colors?.bg_grey};
        border-color: ${colors?.bg_grey};
        color: ${colors?.typo_secondary};
    }
`;

const SInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    ${SBaseButton}.loading & {
        opacity: 0;
    }
`;
const SIcon = styled.div`
    &.left {
        margin-right: 0.4em;
    }
    &.right {
        margin-left: 0.4em;
    }
    svg {
        width: auto;
        height: 1.4em;
    }
`;
const SText = styled.div`
    white-space: nowrap;
`;

export default BaseButton;
