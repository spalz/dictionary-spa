import React from "react";
import styled from "styled-components";
import Select, { components } from "react-select";
import { FieldError } from "react-hook-form";

import { IconTriangleTop } from "@components/icons/arrows";
import { BaseFormField, FieldWrap } from "@components/form";
import { colors, fonts, forms } from "@styles/vars";

const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <DropdownIndicatorStyle>
                <IconTriangleTop />
            </DropdownIndicatorStyle>
        </components.DropdownIndicator>
    );
};

interface FormSelectFieldProps {
    id: number;
    options: Array<{
        name: string;
        value: string;
    }>;
    loading: boolean;
    disabled: boolean;
    error?: FieldError;
}

const FormSelectField: React.FC<FormSelectFieldProps> = ({
    id,
    options,
    loading = false,
    disabled,
    error,
    ...rest
}) => {
    return (
        <FieldWrap error={error}>
            <SFormSelectField className="input_field">
                <BaseFormField id={id} {...rest}>
                    <Select
                        styles={selectStyles}
                        components={{
                            IndicatorSeparator: () => null,
                            DropdownIndicator: DropdownIndicator,
                        }}
                        isLoading={loading}
                        isDisabled={loading || disabled}
                        options={options}
                        {...rest}
                    />
                </BaseFormField>
            </SFormSelectField>
        </FieldWrap>
    );
};

const selectStyles = {
    container: (styles: any, state: any) => ({
        ...styles,
        position: "relative",
        zIndex: state.isFocused ? "6" : "5",
        pointerEvents: state.isDisabled ? "none" : "all",
    }),
    control: (styles: any, state: any) => ({
        ...styles,
        backgroundColor: "trasparent",
        minHeight: forms?.field_height,
        height: "auto",
        borderWidth: forms?.field_border_width,
        outline: "none",
        boxShadow: "none",
        borderRadius: 0,
        "&:hover": {
            borderColor: colors?.form_hover_border,
        },
        borderColor: state.isFocused
            ? colors?.form_hover_border
            : colors?.form_base_border,
        borderBottomLeftRadius: state.isFocused ? "0!important" : undefined,
        borderBottomRightRadius: state.isFocused ? "0!important" : undefined,
    }),
    valueContainer: (styles: any) => ({
        ...styles,
        padding: `2px ${forms?.field_spacing_h} 2px 56px`,
    }),
    singleValue: (styles: any) => ({
        ...styles,
        color: colors?.typo_primary,
        fontFamily: fonts?.ff_base,
        fontWeight: forms?.field_font_weight,
        fontSize: forms?.field_font_size,
    }),
    placeholder: (styles: any) => ({
        ...styles,
        color: colors?.typo_placeholder,
        fontFamily: fonts?.ff_base,
        fontWeight: forms?.field_font_weight,
        fontSize: forms?.field_font_size,
    }),
    menu: (styles: any) => ({
        ...styles,
        backgroundColor: colors?.bg_dark,
        border: colors?.form_base_border,
        borderRadius: forms?.field_border_radius,
        borderTopLeftRadius: "0!important",
        borderTopRightRadius: "0!important",
        marginBottom: "4px",
        marginTop: "0",
        padding: "10px 0",
        overflow: "hidden",
    }),
    option: (styles: any, state: any) => ({
        ...styles,
        backgroundColor: state.isFocused && colors?.typo_interactive,
        fontFamily: fonts?.ff_base,
        fontWeight: forms?.field_font_weight,
        fontSize: forms?.field_font_size,
        padding: "10px 0 10px 56px",
        color: state.isFocused ? colors?.form_base_typo : colors?.typo_inverse,
        "&:hover": {
            backgroundColor: colors?.typo_interactive,
            color: colors?.white,
        },
    }),
    indicatorsContainer: (styles: any, state: any) => ({
        ...styles,
        "> div": {
            padding: 0,
            color: state.isFocused
                ? colors?.typo_interactive
                : colors?.typo_primary,
            "&:hover": {
                color: colors?.typo_interactive,
            },
        },
    }),
    loadingIndicator: (styles: any) => ({
        ...styles,
        color: `${colors?.typo_primary}!important`,
    }),
    IndicatorsContainer: (styles: any) => ({
        ...styles,
        padding: 0,
    }),
};

const SFormSelectField = styled.div`
    padding: 0 !important;
`;

export const DropdownIndicatorStyle = styled.div`
    padding-right: ${forms?.field_spacing_h} !important;
    svg {
        width: 26px;
        height: 26px;
    }
`;

export default FormSelectField;
