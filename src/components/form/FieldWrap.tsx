import React from "react";
import CN from "classnames";
import styled from "styled-components";
import { FieldError } from "react-hook-form";

import { ErrorFormField } from "@components/form";
import { forms } from "@styles/vars";

interface FieldWrapProps {
    error?: FieldError;
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
    .input_field {
        margin-bottom: -2px;
    }
    &.icon {
        .input_field {
            padding-left: 56px;
        }
    }
    &:first-of-type {
        .input_field,
        .input_field .SCildren > div > div {
            border-top-left-radius: ${forms?.field_border_radius};
            border-top-right-radius: ${forms?.field_border_radius};
        }
    }
    &:last-of-type {
        .input_field,
        .input_field .SCildren > div > div {
            border-bottom-left-radius: ${forms?.field_border_radius};
            border-bottom-right-radius: ${forms?.field_border_radius};
        }
    }
`;

export default FieldWrap;
