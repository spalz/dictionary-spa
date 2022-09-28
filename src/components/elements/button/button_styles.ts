import { css } from "styled-components";

import { colors } from "@styles/vars";

export const reset_button_style = {
    display: "contents",
    fontSize: "1em",
};

export const primary = css`
    &.primary {
        color: ${colors?.btn_primary_typo};
        background-color: ${colors?.btn_primary_bg};
        border-color: ${colors?.btn_primary_bg};
        @media (hover) {
            &:hover {
                background-color: ${colors?.btn_primary_hover};

                border-color: ${colors?.btn_primary_hover};
                color: ${colors?.btn_primary_hover_typo};
            }
        }
        &:focus,
        &:active {
            border-color: ${colors?.btn_primary_focus};
        }
    }
`;

export const primary_stroke = css`
    &.primary_stroke {
        color: ${colors?.btn_primary_bg};
        border-color: ${colors?.btn_primary_bg};
        @media (hover) {
            &:hover {
                border-color: ${colors?.btn_primary_hover};
                background-color: ${colors?.btn_primary_hover};
                color: ${colors?.btn_primary_hover_typo};
            }
        }
        &:focus,
        &:active {
            border-color: ${colors?.btn_primary_focus};
        }
    }
`;

export const secondary = css`
    &.secondary {
        color: ${colors?.btn_secondary_typo};
        background-color: ${colors?.btn_secondary_bg};
        border-color: ${colors?.btn_secondary_bg};
        @media (hover) {
            &:hover {
                background-color: ${colors?.btn_secondary_hover};
                border-color: ${colors?.btn_secondary_hover};
                color: ${colors?.btn_secondary_hover_typo};
            }
        }
        &:focus,
        &:active {
            border-color: ${colors?.btn_secondary_focus};
        }
    }
`;

export const ghost = css`
    &.ghost {
        color: ${colors?.btn_ghost_typo};
        background-color: ${colors?.btn_ghost_bg};
        border-color: ${colors?.btn_ghost_bg};
        @media (hover) {
            &:hover {
                background-color: ${colors?.btn_ghost_hover};
                border-color: ${colors?.btn_ghost_hover};
                color: ${colors?.btn_ghost_hover_typo};
            }
        }
        &:focus,
        &:active {
            border-color: ${colors?.btn_ghost_focus};
        }
    }
`;

export const ghost_stroke = css`
    &.ghost_stroke {
        color: ${colors?.btn_ghost_typo};
        /* background-color: ${colors?.btn_ghost_bg}; */
        border-color: ${colors?.btn_ghost_bg};
        @media (hover) {
            &:hover {
                /* background-color: ${colors?.btn_ghost_hover}; */
                border-color: ${colors?.btn_ghost_hover};
                color: ${colors?.btn_ghost_hover_typo};
            }
        }
        &:focus,
        &:active {
            border-color: ${colors?.btn_ghost_focus};
        }
    }
`;
