import styled from "styled-components";

import { colors, global, forms, fonts } from "@styles/vars";

export const SInputStyle = styled.div`
    input,
    textarea {
        position: relative;
        border-style: solid;
        display: block;
        -webkit-appearance: none;
        width: 100%;
        font-family: ${fonts?.ff_base};
        font-weight: ${forms?.field_font_weight};
        font-size: ${forms?.field_font_size};
        transition: all ${global?.transition} ease;
        padding: ${forms?.field_spacing_v} ${forms?.field_spacing_h};
        color: ${colors?.typo_primary};
        background-color: ${forms?.field_background};
        border-width: ${forms?.field_border_width};
        border-color: ${colors?.form_base_border};
        outline: none;
        height: ${forms?.field_height};
        border-radius: 0;
        &:hover {
            border-color: ${colors?.form_hover_border};
            z-index: 6;
        }
        &:focus {
            border-color: ${colors?.form_hover_border};
            z-index: 6;
        }
        &.error {
            color: ${colors?.typo_negative};
        }
        .disabled & {
            cursor: not-allowed;
            border-color: ${colors?.form_base_border};
            color: ${colors?.typo_secondary};
        }
        &::placeholder,
        &::-webkit-input-placeholder,
        &::-ms-input-placeholder {
            color: ${colors.typo_placeholder};
        }
    }
    &.textarea {
        height: auto;
    }
`;

export const SLabelStyle = styled.label`
    display: inline-block;
    font-weight: ${fonts?.fw_medium};
    color: ${colors?.typo_primary};
    font-size: ${fonts?.fs_16};
    margin-bottom: 8px;
    z-index: 1;
    cursor: text;
`;
