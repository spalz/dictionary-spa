import React from "react";
import styled from "styled-components";

import { SLabelStyle } from "@components/form/fields/fields_style";

interface BaseFormFieldProps {
    id: number;
    className?: any;
    label?: string;
    children: React.ReactNode;
}

const BaseFormField: React.FC<BaseFormFieldProps> = ({
    id,
    label,
    children,
}) => {
    return (
        <SFormField>
            <SBlock>
                {label ? (
                    <SLabelStyle htmlFor={id?.toString()}>{label}</SLabelStyle>
                ) : null}
                <SCildren>{children}</SCildren>
            </SBlock>
        </SFormField>
    );
};

const SFormField = styled.div`
    width: 100%;
`;

const SBlock = styled.div`
    position: relative;
`;

const SCildren = styled.div`
    position: relative;
`;

export default BaseFormField;
