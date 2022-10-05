import React from "react";
import CN from "classnames";
import styled from "styled-components";

import { fonts, colors, global } from "@styles/vars";
import { FieldError } from "react-hook-form";

interface ErrorProps {
    error?: FieldError;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <SErrorFormField
            className={CN({
                active: error,
            })}
        >
            <SText>{error && error.message ? error.message : null}</SText>
        </SErrorFormField>
    );
};

interface ErrorFormFieldProps {
    children?: React.ReactNode;
    error?: FieldError;
    align_error?: "top" | "bottom";
}

const ErrorFormField: React.FC<ErrorFormFieldProps> = ({
    children,
    error,
    align_error = "bottom",
}) => {
    return (
        <>
            {align_error === "top" ? <Error error={error} /> : null}
            {children}
            {align_error === "bottom" ? <Error error={error} /> : null}
        </>
    );
};

const SErrorFormField = styled.div`
    color: ${colors?.typo_negative};
    &.active {
        margin-top: 0.2em;
    }
    &:last-child {
        margin-bottom: 1.2em;
    }
`;

const SText = styled.div`
    transition: height ${global?.transition};
    font-size: ${fonts?.fs_16};
    height: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${SErrorFormField}.active & {
        height: 1.4em;
    }
`;

export default ErrorFormField;
