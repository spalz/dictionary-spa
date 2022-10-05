import React from "react";
import styled from "styled-components";

import { colors, spacings, global } from "@styles/vars";

interface InfoFormProps {
    children: React.ReactNode;
    type?: "error" | "success";
}

const InfoForm: React.FC<InfoFormProps> = ({ children, type = "error" }) => {
    return <SInfoForm className={type}>{children}</SInfoForm>;
};

const SInfoForm = styled.div`
    border-radius: ${global?.border_radius_big};
    padding: ${spacings?.spacing_card_tiny} ${spacings?.spacing_card_small};
    margin-bottom: ${spacings?.offset_10};
    &.error {
        background-color: ${colors?.bg_alert};
        color: ${colors?.white};
    }
    &.success {
        background-color: ${colors?.bg_success};
        color: ${colors?.white};
    }
`;

export default InfoForm;
