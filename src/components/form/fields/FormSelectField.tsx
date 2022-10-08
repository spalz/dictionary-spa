import React, { useState } from "react";
import styled from "styled-components";
import Select, { components, DropdownIndicatorProps } from "react-select";
import CN from "classnames";
import { ErrorOption } from "react-hook-form";

import { IconTop } from "@components/icons/arrows";
import { BaseFormField, FieldWrap } from "@components/form";
import { colors, fonts, forms, global } from "@styles/vars";

const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
        <components.DropdownIndicator {...props}>
            <SDropdownIndicatorStyle
                className={props.selectProps.menuIsOpen ? "focus" : ""}
            >
                <IconTop />
            </SDropdownIndicatorStyle>
        </components.DropdownIndicator>
    );
};

interface FormSelectFieldProps {
    id: number;
    options: Array<{
        label: string;
        value: number;
    }>;
    loading?: boolean;
    disabled?: boolean;
    error?: ErrorOption;
    label?: string;
    required?: boolean;
    value?: any;
    onBlur: ({ target }: { target: EventTarget | null }) => void;
    isMulti?: boolean;
}

const FormSelectField: React.FC<FormSelectFieldProps> = React.forwardRef(
    (
        {
            id,
            options,
            loading = false,
            disabled,
            error,
            label,
            required,
            onBlur,
            value,
            ...rest
        },
        ref
    ) => {
        const [focused, setFocus] = useState(false);
        const onFocus = () => {
            setFocus(true);
        };
        const onBlurField = (e: any) => {
            onBlur(e);
            setFocus(false);
        };
        const value_fill = value !== undefined && value?.length !== 0;
        const focus = !!(focused || value_fill);

        return (
            <FieldWrap error={error}>
                <SFormSelectField>
                    <BaseFormField
                        id={id}
                        label={label}
                        required={required}
                        classNames={CN({
                            focus: focus,
                            disabled: disabled,
                        })}
                    >
                        <Select
                            {...rest}
                            tabIndex={id}
                            styles={selectStyles}
                            components={{
                                IndicatorSeparator: () => null,
                                DropdownIndicator: DropdownIndicator,
                                ClearIndicator: undefined,
                            }}
                            isLoading={loading}
                            isDisabled={loading || disabled}
                            options={options}
                            placeholder={false}
                            onFocus={onFocus}
                            onBlur={onBlurField}
                        />
                    </BaseFormField>
                </SFormSelectField>
            </FieldWrap>
        );
    }
);

FormSelectField.displayName = "FormSelectField";

const selectStyles = {
    container: (styles: any, state: any) => ({
        ...styles,
        position: "relative",
        zIndex: state.isFocused ? "19" : "5",
        pointerEvents: state.isDisabled ? "none" : "all",
    }),
    control: (styles: any, state: any) => ({
        ...styles,
        backgroundColor: "trasparent",
        minHeight: global?.control_height_large,
        height: "auto",
        borderWidth: forms?.field_border_width,
        outline: "none",
        boxShadow: "none",
        borderRadius: forms?.field_border_radius,
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
        padding: `20px ${forms?.field_spacing_h} 2px`,
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
        padding: `10px ${forms?.field_spacing_h} 10px`,
        color: colors?.typo_inverse,
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
    // multiValue: (styles: any) => ({
    //     ...styles,
    // }),
    multiValueLabel: (styles: any) => ({
        ...styles,
        padding: "0px 3px",
    }),
    multiValueRemove: (styles: any) => ({
        ...styles,
        backgroundColor: colors?.form_negative_bg,
        color: colors?.form_negative_typo,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: colors?.form_hover_negative_bg,
            color: colors?.form_negative_typo,
        },
    }),
    input: (styles: any) => ({
        ...styles,
        color: colors?.typo_primary,
    }),
};

const SFormSelectField = styled.div`
    padding: 0 !important;
`;

export const SDropdownIndicatorStyle = styled.div`
    padding-right: ${forms?.field_spacing_h} !important;
    transition: all ${global?.transition};
    &.focus {
        transform: scaleY(-1);
    }
    svg {
        width: 18px;
        height: 18px;
    }
`;

export default FormSelectField;
