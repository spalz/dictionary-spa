import React, { useState } from "react";
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
}

const FormPasswordField: React.FC<FormPasswordFieldProps> = ({
    id,
    label,
    disabled,
    error,
    ...rest
}) => {
    const [passwordShow, setPasswordShow] = useState(true);

    const togglePasswordShow = () => {
        setPasswordShow(!passwordShow);
    };
    return (
        <FieldWrap error={error}>
            <BaseFormField id={id} label={label} {...rest}>
                <SInputStyle>
                    <input
                        disabled={disabled}
                        className="input_field"
                        type={passwordShow ? "password" : "text"}
                        {...rest}
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
};

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
