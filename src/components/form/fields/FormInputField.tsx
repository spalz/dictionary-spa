import React, { useState, FocusEvent } from "react";
import CN from "classnames";
import { FieldError } from "react-hook-form";

import { FieldWrap, BaseFormField } from "@components/form";
import { SInputStyle } from "./fields_style";

interface FormInputFieldProps {
    id: number;
    label: string;
    disabled?: boolean;
    error?: FieldError;
    type?: "text" | "email";
    value: string | undefined;
    onBlur: ({ target }: { target: EventTarget | null }) => void;
    required?: boolean;
}

const FormInputField: React.FC<FormInputFieldProps> = React.forwardRef(
    (
        {
            id,
            label,
            disabled,
            error,
            type = "text",
            value,
            onBlur,
            required,
            ...field
        },
        ref
    ) => {
        const [focused, setFocus] = useState(false);
        const onFocus = () => {
            setFocus(true);
        };
        const onBlurField = (e: FocusEvent<HTMLInputElement>) => {
            onBlur(e);
            setFocus(false);
        };
        const focus = !!(focused || value);

        return (
            <FieldWrap error={error}>
                <BaseFormField
                    id={id}
                    label={label}
                    required={required}
                    classNames={CN({
                        focus: focus,
                        disabled: disabled,
                    })}
                >
                    <SInputStyle>
                        <input
                            {...field}
                            value={value}
                            disabled={disabled}
                            tabIndex={id}
                            type={type}
                            onFocus={onFocus}
                            onBlur={onBlurField}
                        />
                    </SInputStyle>
                </BaseFormField>
            </FieldWrap>
        );
    }
);

FormInputField.displayName = "FormInputField";

export default FormInputField;
