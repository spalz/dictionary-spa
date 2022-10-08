import React from "react";
import CN from "classnames";
import styled from "styled-components";
import { FieldError, ErrorOption } from "react-hook-form";

import { ErrorFormField } from "@components/form";

interface FieldWrapProps {
    error?: FieldError | ErrorOption;
    children: React.ReactNode;
}

const FieldWrap: React.FC<FieldWrapProps> = ({ children, error }) => {
    return (
        <SFieldWrap
            className={CN({
                error: error?.message,
            })}
        >
            {children}
            <ErrorFormField error={error} />
        </SFieldWrap>
    );
};

const SFieldWrap = styled.div`
    position: relative;
    width: 100%;
`;

export default FieldWrap;
