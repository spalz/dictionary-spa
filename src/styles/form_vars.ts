import { createGlobalStyle } from "styled-components";

import { colors, global, fonts } from "@styles/vars";
import { down } from "@config/breakpoints_vars";

export const forms = {
    field_spacing_h: "var(--field-spacing-h)",
    field_spacing_v: "var(--field-spacing-v)",
    field_text_color: "var(--field-text-color)",
    field_placeholder_color: "var(--field-placeholder-color)",
    field_font_size: "var(--field-font-size)",
    field_font_weight: "var(--field-font-weight)",
    field_border_radius: "var(--field-border-radius)",
    field_border_width: "var(--field-border-width)",
    field_border_color: "var(--field-border-color)",
    field_background: "var(--field-background)",
    // /* hover */
    field_hover_border_color: "var(--field-hover--border-color)",
    /* focus */
    field_focus_border_color: "var(--field-focus--border-color)",
    // /* disabled */
    field_disabled_border_color: "var(--field-disabled-border-color)",
    field_disabled_background: "var(--field-disabled-background)",
    // /* //////////////// */
    // /* checkbox & radio */
    // /* //////////////// */
    checbox_background: "var(--checbox-background)",
    // /* checked */
    checbox_checked_color: "var(--checbox-checked-color)",
    checbox_checked_background: "var(--checbox-checked-background)",
    // /* hover */
    checbox_hover_background: "var(--checbox-hover-background)",
    // /* disabled */
    checbox_disabled_background: "var(--checbox-disabled-background)",
    // /* forms */
    profile_form_max_width: "var(--profile-form-max-width)",
};

const FormVarsStyle = createGlobalStyle`
    :root {
        --field-spacing-h: 18px;
        --field-spacing-v: 16px;
        --field-text-color: ${colors?.typo_primary};
        --field-placeholder-color: ${colors?.typo_placeholder};
        --field-font-size: ${fonts?.fs_16};
        --field-font-weight: ${fonts?.fw_regular};
        --field-border-radius: ${global?.border_radius};
        --field-border-width: ${global?.border_width};
        --field-border-color: ${colors?.form_base_border};
        --field-background: transparent;
        /* hover */
        --field-hover-border-color: var(--grey);
        /* focus */
        --field-focus-border-color: var(--primary);
        /* disabled */
        --field-disabled-border-color: var(--grey-light);
        --field-disabled-background: var(--grey-light-3);
        /* //////////////// */
        /* checkbox & radio */
        /* //////////////// */
        --checbox-background: var(--white);
        /* checked */
        --checbox-checked-color: var(--white);
        --checbox-checked-background: var(--primary);
        /* hover */
        --checbox-hover-background: var(--grey-light-3);
        /* disabled */
        --checbox-disabled-background: var(--white);
        /* forms */
        --profile-form-max-width: 860px;
    }
`;

export default FormVarsStyle;
