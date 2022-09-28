import React from "react";
import CN from "classnames";
import styled from "styled-components";
import { position } from "polished";

import { colors, global, spacings } from "@styles/vars";
import { down } from "@config/breakpoints_vars";

interface Loader {
    type?: "default" | "absolute" | "fixed" | "block";
    size?: "small" | "big";
    bg?: boolean;
    margin_top_show?: boolean;
    margin_bottom_show?: boolean;
}

const Loader: React.FC<Loader> = ({
    type = "block",
    size = "small",
    bg = false,
    margin_top_show = false,
    margin_bottom_show = false,
}) => {
    return (
        <SLoader
            className={CN(`${type ? type : ""} ${size ? size : ""} `, {
                bg: bg,
                small_size: size === "small",
                big_size: size === "big",
                margin_top_show: margin_top_show,
                margin_bottom_show: margin_bottom_show,
            })}
        >
            <Spinner />
        </SLoader>
    );
};

const SLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 3;
    &.absolute {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    &.fixed {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 100;
    }
    &.block {
        height: 3em;
        width: 100%;
        &.margin_top_show {
            margin-top: ${spacings.offset_20};
            ${down("sm")} {
                margin-top: ${spacings.offset_10};
            }
        }
        &.margin_bottom_show {
            margin-bottom: 3em;
            ${down("sm")} {
                margin-bottom: 1em;
            }
        }
    }
    &.bg {
        background: ${colors?.white};
        border-radius: ${global?.border_radius};
    }
`;

const Spinner = styled.div`
    position: relative;
    width: 3.2em;
    height: 3.2em;
    border: 0.3em solid ${colors?.bg_dark};
    border-right-color: transparent;
    border-radius: 50%;
    animation: loader 1s linear infinite;
    &:after {
        content: "";
        ${position("absolute", "0", null, null, "2em")}
        width: 0.3em;
        height: 0.3em;
        background: ${colors?.bg_interactive};
        border-radius: 50%;
        position: absolute;
    }
    ${SLoader}.small_size & {
        font-size: 0.6em;
    }
    @keyframes loader {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Loader;
