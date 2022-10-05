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
        padding: 1em ${forms?.field_spacing_h} 0;
        color: ${colors?.typo_primary};
        background-color: ${forms?.field_background};
        border-width: ${forms?.field_border_width};
        border-color: ${colors?.form_base_border};
        outline: none;
        height: ${global?.control_height_large};
        border-radius: ${global?.border_radius};
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
    top: 16px;
    left: calc(${forms?.field_spacing_h} + 2px);
    position: absolute;
    font-size: 1em;
    cursor: text;
    color: ${colors?.typo_primary};
    transition: all ${global?.transition} ease-out;
    border-radius: 10px;
    padding: 0;
    z-index: 10;
    pointer-events: none;
    .focus & {
        top: 8px;
        font-size: 0.78em;
    }
`;
