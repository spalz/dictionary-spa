import React from "react";
import CN from "classnames";
import { FieldError } from "react-hook-form";

import { FieldWrap, BaseFormField } from "@components/form";
import { SInputStyle } from "./fields_style";

interface FormInputFieldProps {
    id: number;
    label: string;
    disabled?: boolean;
    className?: string;
    error?: FieldError;
    type?: "text" | "email";
}

const FormInputField: React.FC<FormInputFieldProps> = React.forwardRef(
    (
        { id, label, disabled, className, error, type = "text", ...props },
        ref
    ) => {
        return (
            <FieldWrap error={error}>
                <BaseFormField
                    id={id}
                    label={label}
                    className={CN(className, {
                        disabled: disabled,
                    })}
                >
                    <SInputStyle>
                        <input
                            disabled={disabled}
                            className="input_field"
                            tabIndex={id}
                            type={type}
                            {...props}
                        />
                    </SInputStyle>
                </BaseFormField>
            </FieldWrap>
        );
    }
);

FormInputField.displayName = "FormInputField";

export default FormInputField;
