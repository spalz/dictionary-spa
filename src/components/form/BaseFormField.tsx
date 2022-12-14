import React from "react";
import styled from "styled-components";

import { SLabelStyle } from "@components/form/fields/fields_style";

interface BaseFormFieldProps {
    id: number;
    classNames: string;
    label?: string;
    children: React.ReactNode;
    required?: boolean;
}

const BaseFormField: React.FC<BaseFormFieldProps> = ({
    id,
    label,
    classNames,
    children,
    required,
}) => {
    return (
        <SFormField className={classNames}>
            <SBlock>
                {label ? (
                    <SLabelStyle htmlFor={id?.toString()}>
                        {label}
                        {required && <span> *</span>}
                    </SLabelStyle>
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
