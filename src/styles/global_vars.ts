import { createGlobalStyle } from "styled-components";

import { down } from "@config/breakpoints_vars";

export const global = {
    border_radius: "var(--border-radius)",
    border_radius_large: "var(--border-radius-large)",
    border_radius_big: "var(--border-radius-big)",
    transition: "var(--transition)",
    border_width: "var(--border-width)",

    /* header */
    header_height: "var(--header-height)",

    /* z-index */
    zi_header: 20,

    /* controls */
    control_height_small: "var(--control-small-height)",
    control_height_mid: "var(--control-mid-height)",
    control_height_large: "var(--control-large-height)",
};

const GlobalVarsStyle = createGlobalStyle`
    :root {
        --border-radius: 3px;
        --border-radius-large: 8px;
        --border-radius-big: 20px;
        --transition: 0.1s;
        --border-width: 2px;
        
        /* header */
        --header-height: 112px;
        ${down("sm")} {
            --header-height: 76px;
        }

        --control-small-height: 34px;
        --control-mid-height: 46px;
        ${down("sm")} {
            --control-mid-height: 40px;
        }
        --control-large-height: 58px;
        ${down("sm")} {
            --control-large-height: 48px;
        }

    }
`;

export default GlobalVarsStyle;
