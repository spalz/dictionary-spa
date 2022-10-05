import React, { useCallback } from "react";
import CN from "classnames";
import styled from "styled-components";

interface FormCheckboxFieldProps {
    id: string;
    label: string;
    onChange: (radio_value: string) => void;
    value: string;
    radio_value: string;
    disabled: boolean;
    error: {
        message: string;
    };
}

const FormCheckboxField: React.FC<FormCheckboxFieldProps> = ({
    onChange,
    value,
    radio_value,
    label,
    disabled,
    ...rest
}) => {
    const handleChange = useCallback(() => {
        onChange(radio_value);
    }, []);
    return (
        <SLabel
            className={CN({
                checked: value === radio_value,
                disabled: disabled,
            })}
        >
            <SInput
                type="radio"
                checked={value === radio_value}
                onChange={handleChange}
                {...rest}
            />
            <SCheckbox>
                <span />
            </SCheckbox>
            {label ? <STitle>{label}</STitle> : null}
        </SLabel>
    );
};

const SLabel = styled.label`
    display: flex;
    align-items: center;
    & + & {
        margin-top: 10px;
    }
`;
const SInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const SCheckbox = styled.div`
    border-radius: 50%;
    border: var(--field-border-width) solid var(--field-border-color);
    background-color: var(--checbox-background);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    transition: all var(--transition);
    cursor: pointer;
    span {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--white);
    }
    ${SLabel}:hover & {
        background-color: var(--checbox-hover-background);
    }
    ${SLabel}.checked & {
        border-color: var(--checbox-checked-background);
        color: var(--checbox-checked-color);
        background-color: var(--checbox-checked-background);
        span {
            animation: bounce 0.2s linear forwards 0.1s;
        }
    }
    ${SLabel}.disabled & {
        background-color: var(--checbox-disabled-background);
        cursor: default;
    }
    @keyframes bounce {
        50% {
            transform: scale(0.4);
        }
        75% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    @media print {
        display: none;
    }
`;

const STitle = styled.div`
    padding-left: 12px;
    font-size: var(--fs-16);
    cursor: pointer;
`;

export default FormCheckboxField;
