import React, { useState, FocusEvent } from "react";
import CN from "classnames";
import styled from "styled-components";
import { position } from "polished";
import { FieldError } from "react-hook-form";

import { BaseFormField, FieldWrap } from "@components/form";
import { IconEyeOpen, IconEyeClosed } from "@components/icons/forms";
import { SInputStyle } from "./fields_style";

interface FormPasswordFieldProps {
    id: number;
    label: string;
    disabled?: boolean;
    className?: string;
    error?: FieldError;
    value: string | undefined;
    onBlur: ({ target }: { target: EventTarget | null }) => void;
    required?: boolean;
}

const FormPasswordField: React.FC<FormPasswordFieldProps> = React.forwardRef(
    (
        {
            id,
            label,
            disabled,
            className,
            error,
            onBlur,
            value,
            required,
            ...props
        },
        ref
    ) => {
        const [passwordShow, setPasswordShow] = useState(true);
        const [focused, setFocus] = useState(false);

        const togglePasswordShow = () => {
            setPasswordShow(!passwordShow);
        };

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
                            {...props}
                            disabled={disabled}
                            className="input_field"
                            type={passwordShow ? "password" : "text"}
                            id={id.toString()}
                            onFocus={onFocus}
                            onBlur={onBlurField}
                            tabIndex={id}
                        />
                    </SInputStyle>
                    <STogglePassword
                        onClick={togglePasswordShow}
                        className={CN({
                            active: passwordShow,
                        })}
                    >
                        {passwordShow ? <IconEyeOpen /> : <IconEyeClosed />}
                    </STogglePassword>
                </BaseFormField>
            </FieldWrap>
        );
    }
);

FormPasswordField.displayName = "FormPasswordField";

const STogglePassword = styled.div`
    ${position("absolute", "50%", "var(--field-spacing-h)", null, null)};
    transform: translateY(-50%);
    color: var(--grey-3);
    transition: color var(--transition);
    cursor: pointer;
    z-index: 8;
    &:hover {
        color: var(--grey);
    }
    &.active {
        color: var(--grey);
    }
    svg {
        width: 32px;
        height: 32px;
    }
`;

export default FormPasswordField;
