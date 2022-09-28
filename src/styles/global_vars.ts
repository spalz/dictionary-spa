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

    zi_modal_overlay: 30,
    zi_modal: 31,
    zi_modal_close: 31,
    zi_modal_open_button: 31,

    /* course */
    course_container_width: "var(--course-container-width)",

    /* static page */
    static_page_banner_height: "var(--static-page-banner-height)",

    /* profile */
    progile_sidebar_width: "var(--progile-sidebar-width)",
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

        /* course */
        --course-container-width: 720px;
        ${down("lg")} {
            --course-container-width: auto;
        }
        ${down("md")} {
            --course-container-width: 100%;
        }

        /* static page */
        --static-page-banner-height: 460px;
        ${down("sm")} {
            --static-page-banner-height: 320px;
        }

        /* profile */
        --progile-sidebar-width: 460px;
        ${down("lg")} {
            --progile-sidebar-width: 300px;
        }

    }
`;

export default GlobalVarsStyle;
