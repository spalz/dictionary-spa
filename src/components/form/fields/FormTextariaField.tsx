import React from "react";
import CN from "classnames";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import { FieldError } from "react-hook-form";

import { down } from "@config/breakpoints_vars";
import { BaseFormField, FieldWrap } from "@components/form";
import { SInputStyle } from "./fields_style";

interface FormTextariaFieldProps {
    id: number;
    label: string;
    disabled?: boolean;
    className?: string;
    error?: FieldError;
    type?: "text" | "email";
}

const FormTextariaField: React.FC<FormTextariaFieldProps> = ({
    id,
    label,
    disabled,
    error,
    ...rest
}) => {
    return (
        <FieldWrap error={error}>
            <BaseFormField
                id={id}
                label={label}
                className={CN({
                    disabled: disabled,
                })}
            >
                <SInputStyle>
                    <SFormFieldTextarea
                        className={`input_field textarea`}
                        {...rest}
                    />
                </SInputStyle>
            </BaseFormField>
        </FieldWrap>
    );
};

const SFormFieldTextarea = styled(Textarea)`
    min-height: 90px;
    resize: none;
    overflow: hidden;
    ${down("sm")} {
        min-height: 80px;
    }
`;

export default FormTextariaField;
