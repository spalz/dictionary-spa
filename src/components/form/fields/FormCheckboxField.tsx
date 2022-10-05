import React from "react";
import CN from "classnames";
import styled from "styled-components";
import { position } from "polished";

interface FormCheckboxFieldProps {
    value: string;
    label: string;
    onChange: any;
    tabIndex: number;
    disabled: boolean;
    className: string;
}

const FormCheckboxField: React.FC<FormCheckboxFieldProps> = ({
    value,
    label,
    disabled,
    onChange,
    ...rest
}) => {
    return (
        <SLabel
            className={CN({
                checked: !!value,
                disabled: disabled,
            })}
        >
            <SInput
                type="checkbox"
                checked={!!value}
                onChange={(e) => onChange(e.target.checked)}
                {...rest}
            />
            <SCheckbox>
                <svg viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.59961 4.51733L6.38062 8.42358L14.3047 1.12378"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </SCheckbox>
            {label ? <STitle>{label}</STitle> : null}
        </SLabel>
    );
};

const SLabel = styled.label`
    display: flex;
    align-items: center;
    border-radius: var(--field-border-radius);
    &.disabled {
        pointer-events: none;
    }
    &:focus-within {
        box-shadow: 0 0 0 1px var(--secondary);
    }
`;
const SInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;
const STitle = styled.div`
    padding-left: 0.3em;
    font-size: var(--fs-16);
    cursor: pointer;
`;

const SCheckbox = styled.div`
    border-radius: var(--field-border-radius);
    border: var(--field-border-width) solid var(--field-border-color);
    background-color: var(--checbox-background);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    transition: all var(--transition);
    cursor: pointer;
    position: relative;
    svg {
        width: 14px;
        height: auto;
        opacity: 0;
    }
    ${SLabel}:hover & {
        background-color: var(--checbox-hover-background);
    }
    ${SLabel}.checked & {
        border-color: var(--checbox-checked-background);
        color: var(--checbox-checked-color);
        background-color: var(--checbox-checked-background);
        svg {
            animation: bounce 0.2s linear forwards 0.1s;
        }
    }
    ${SLabel}.disabled & {
        background-color: var(--checbox-disabled-background);
        cursor: default;
        &:before {
            content: "";
            width: 10px;
            height: 1.5px;
            ${position("absolute", "50%", null, null, "50%")};
            transform: translateY(-50%) translateX(-50%);
            background-color: var(--grey-light);
        }
    }
    @keyframes bounce {
        50% {
            transform: scale(1.2);
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

export default FormCheckboxField;
