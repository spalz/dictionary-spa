import { createGlobalStyle } from "styled-components";
import { darken, lighten } from "polished";

export const base_colors = {
    interactive: "#F05644",
    day_bg_grey: "#E7E7E7",
    night_bg_grey: "#2B2A2A",
    white: "#ffffff",
};

export const colors = {
    color_beige_day: "#F5F4F0",
    color_beige_night: "#222222",
    //
    white: "var(--white)",
    black_light: "var(--black-light)",
    black: "var(--black)",

    typo_link_hover: "var(--typo-link-hover)",
    typo_link: "var(--typo-link)",
    typo_positive: "var(--typo-positive)",
    typo_negative: "var(--typo-negative)",
    typo_inverse: "var(--typo-inverse)",
    typo_placeholder: "var(--typo-placeholder)",
    typo_secondary: "var(--typo-secondary)",
    typo_primary: "var(--typo-primary)",
    typo_interactive: "var(--typo-interactive)",

    bg_light: "var(--bg-light)",
    bg_warning_light: "var(--bg-warning-light)",
    bg_danger_light: "var(--bg-danger-light)",
    bg_success_light: "var(--bg-success-light)",
    bg_neutral_light: "var(--bg-neutral-light)",
    bg_success: "var(--bg-success)",
    bg_alert: "var(--bg-alert)",
    bg_grey: "var(--bg-grey)",
    bg_dark: "var(--bg-dark)",
    bg_beige: "var(--bg-beige)",
    bg_interactive: "var(--bg-interactive)",
    bg_body: "var(--bg-body)",
    bg_body_border: "var(--bg-body-border)",
    bg_grey_200: "var(--bg-grey-200)",

    bg_gradient_success: "var(--bg-gradient-success)",
    bg_gradient_danger: "var(--bg-gradient-danger)",

    btn_primary_hover_typo: "var(--btn-primaryhover-typo)",
    btn_primary_focus: "var(--btn-primaryfocus)",
    btn_primary_hover: "var(--btn-primaryhover)",
    btn_primary_bg: "var(--btn-primarybg)",
    btn_primary_typo: "var(--btn-primarytypo)",
    btn_ghost_hover_typo: "var(--btn-ghosthover-typo)",
    btn_ghost_focus: "var(--btn-ghostfocus)",
    btn_ghost_hover: "var(--btn-ghosthover)",
    btn_ghost_bg: "var(--btn-ghostbg)",
    btn_ghost_typo: "var(--btn-ghosttypo)",
    btn_secondary_hover_typo: "var(--btn-secondaryhover-typo)",
    btn_secondary_focus: "var(--btn-secondaryfocus)",
    btn_secondary_hover: "var(--btn-secondaryhover)",
    btn_secondary_bg: "var(--btn-secondarybg)",
    btn_secondary_typo: "var(--btn-secondarytypo)",

    form_checked_border: "var(--form-checkedborder)",
    form_checked_bg: "var(--form-checkedbg)",
    form_checked_typo: "var(--form-checkedtypo)",
    form_negative_border: "var(--form-negativeborder)",
    form_negative_bg: "var(--form-negativebg)",
    form_hover_negative_bg: "var(--form-hover_negativebg)",
    form_negative_typo: "var(--form-negativetypo)",
    form_positive_border: "var(--form-positiveborder)",
    form_positive_bg: "var(--form-positivebg)",
    form_positive_typo: "var(--form-positivetypo)",
    form_disabled_border: "var(--form-disabledborder)",
    form_disabled_bg: "var(--form-disabledbg)",
    form_disabled_typo: "var(--form-disabledtypo)",
    form_focus_border: "var(--form-focusborder)",
    form_focus_bg: "var(--form-focusbg)",
    form_focus_typo: "var(--form-focustypo)",
    form_hover_border: "var(--form-hoverborder)",
    form_hover_bg: "var(--form-hoverbg)",
    form_hover_typo: "var(--form-hovertypo)",
    form_base_border: "var(--form-baseborder)",
    form_base_bg: "var(--form-basebg)",
    form_base_typo: "var(--form-basetypo)",
};

const ThemeVarsStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black-light: #292929;
        --black: #282421;

        .day, .day_important {
            --typo-link-hover: #1053AB;
            --typo-link: #0078D2;
            --typo-positive: #72C570;
            --typo-negative: #EB5757;
            --typo-inverse: #F4F4F4;
            --typo-placeholder: #B9B9B9;
            --typo-secondary: #8A8A8E;
            --typo-primary: var(--black);
            --typo-interactive: #F05644;
        }
        .night {
            --typo-link-hover: #0078D2;
            --typo-link: #189CFF;
            --typo-positive: #72C570;
            --typo-negative: #EB5757;
            --typo-inverse: #292929;
            --typo-placeholder: #B9B9B9;
            --typo-secondary: #8D8D93;
            --typo-primary: #DEDEDE;
            --typo-interactive: #F05644;
        }
        .day, .day_important {
            --bg-light: ${colors?.color_beige_day};
            --bg-warning-light: #F5EEDC;
            --bg-danger-light: #ECD7E3;
            --bg-success-light: #EBF3DA;
            --bg-neutral-light: #EFF0F1;
            --bg-success: #72C570;
            --bg-alert: #EB5757;
            --bg-grey: #E7E7E7;
            --bg-dark: #101010;
            --bg-beige: ${colors?.color_beige_day};
            --bg-interactive: #F05644;
            --bg-body: var(--white);
            --bg-body-border: ${darken(0.06, colors?.color_beige_day)};
            --bg-grey-200: #DFDEDE;
            //
            --bg-gradient-success: linear-gradient(90deg, #FFFFFF 0%, rgba(223, 251, 229, 0.5) 100%);
            --bg-gradient-danger: linear-gradient(90deg, #FFFFFF 0%, rgba(247, 220, 220, 0.4) 100%);
        }
        .night {
            --bg-light: #282828;
            --bg-warning-light: #DEB54E;
            --bg-danger-light: #E67D89;
            --bg-success-light: #327C4A;
            --bg-neutral-light: #353535;
            --bg-success: #72C570;
            --bg-alert: #EB5757;
            --bg-grey: #2B2A2A;
            --bg-dark: #FFFFFF;
            --bg-beige: #232323;
            --bg-interactive: #F05644;
            --bg-body: ${colors?.color_beige_night};
            --bg-body-border: ${lighten(0.06, colors?.color_beige_night)};
            --bg-grey-200: #131313;
            //
            --bg-gradient-success: linear-gradient(180deg, var(--black) 0%, rgba(38, 140, 45, 0.2) 100%);
            --bg-gradient-danger: linear-gradient(180deg, var(--black) 0%, rgba(102, 27, 27, 0.2) 100%);
        }
        .day, .day_important {
            --btn-primaryhover-typo: #FFFFFF;
            --btn-primaryfocus: #1E1E1E;
            --btn-primaryhover: ${darken(1, "#292929")};
            --btn-primarybg: #292929;
            --btn-primarytypo: #FFFFFF;
            
            --btn-secondaryhover-typo: #FFFFFF;
            --btn-secondaryfocus: #1E1E1E;
            --btn-secondaryhover: ${darken(0.05, "#F05644")};
            --btn-secondarybg: #F05644;
            --btn-secondarytypo: #FFFFFF;

            --btn-ghosthover-typo: #363636;
            --btn-ghosthover: ${darken(-0.66, "#363636")};
            --btn-ghostfocus: #363636;
            --btn-ghostbg: #E7E7E7;
            --btn-ghosttypo: #363636;
        }
        .night {
            --btn-secondaryhover-typo: #FFFFFF;
            --btn-secondaryfocus: #fff;
            --btn-secondaryhover: #F05644;
            --btn-secondarybg: #F05644;
            --btn-secondarytypo: #FFFFFF;
            
            --btn-ghosthover-typo: #F1F1F1;
            --btn-ghostfocus: #363636;
            --btn-ghosthover: ${darken(-0.1, "#363636")};
            --btn-ghostbg: #363636;
            --btn-ghosttypo: #F1F1F1;
            
            --btn-primaryhover-typo: #1E1E1E;
            --btn-primaryfocus: #FFFFFF;
            --btn-primaryhover: #FFFFFF;
            --btn-primarybg: #FFFFFF;
            --btn-primarytypo: #1E1E1E;
        }
        .day, .day_important {
            --form-checkedborder: #F05644;
            --form-checkedbg: #F05644;
            --form-checkedtypo: #F4ECA4;
            --form-negativeborder: #EB5757;
            --form-negativebg: #EB5757;
            --form-hover_negativebg: ${lighten(0.05, "#EB5757")};
            --form-negativetypo: #FFFFFF;
            --form-positiveborder: #5B8B6C;
            --form-positivebg: #5B8B6C;
            --form-positivetypo: #FFFFFF;
            --form-disabledborder: #CCCCCC;
            --form-disabledbg: #CCCCCC;
            --form-disabledtypo: #ADADAD;
            --form-focusborder: #F4ECA4;
            --form-focusbg: ${colors?.color_beige_day};
            --form-focustypo: #F05644;
            --form-hoverborder: #F05644;
            --form-hoverbg: ${colors?.color_beige_day};
            --form-hovertypo: #000000;
            --form-baseborder: #1E1E1E;
            --form-basebg: #FFFFFF;
            --form-basetypo: #1E1E1E;
        }
        .night {
            --form-checkedtypo: #F4ECA4;
            --form-checkedbg: #F05644;
            --form-checkedborder: #F05644;
            --form-negativetypo: #FFFFFF;
            --form-negativebg: #EB5757;
            --form-negativeborder: #EB5757;
            --form-positivetypo: #FFFFFF;
            --form-positivebg: #5B8B6C;
            --form-positiveborder: #5B8B6C;
            --form-disabledtypo: #ADADAD;
            --form-disabledbg: #CCCCCC;
            --form-disabledborder: #CCCCCC;
            --form-focustypo: #F05644;
            --form-focusbg: ${colors?.color_beige_day};
            --form-focusborder: #F4ECA4;
            --form-hovertypo: #FFFFFF;
            --form-hoverbg: #000000;
            --form-hoverborder: #F05644;
            --form-basetypo: #FFFFFF;
            --form-basebg: #000000;
            --form-baseborder: #757377;
        }
        
        --color-barley-corn: #A77C60;
        --color-dawn-pink: #F2EAE1;
        --color-blue: #5384CE;
        --color-tradewind: #6EBCB6;
        --color-gull-gray: #9CB6BD;
        --color-flamingo: #F05644;
        --color-yellow: #FEB12E;
        --color-tacao: #F0A482;
    }
`;

export default ThemeVarsStyle;
