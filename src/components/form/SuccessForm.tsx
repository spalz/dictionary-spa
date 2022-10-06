import React from "react";
import styled from "styled-components";
import { position } from "polished";

import { down } from "@config/breakpoints_vars";
import { colors, fonts, spacings } from "@styles/vars";

interface SuccessFormProps {
    icon?: React.ReactNode;
    title?: string;
    text?: string;
}

const SuccessForm: React.FC<SuccessFormProps> = ({ icon, title, text }) => {
    return (
        <SSuccessForm>
            <SBlock>
                <SCurve>
                    <use xlinkHref={`#curve_1`} />
                </SCurve>
                <SIcon>{icon}</SIcon>
                <SText>
                    <span>{title}</span>
                    <div>{text}</div>
                </SText>
            </SBlock>
        </SSuccessForm>
    );
};

const SSuccessForm = styled.div`
    ${down("sm")} {
    }
`;
const SBlock = styled.div`
    position: relative;
    padding: 36px 30px 40px;
    color: ${colors?.white};
`;

const SCurve = styled.svg`
    ${position("absolute", "0", "0", "0", "0")};
    width: 100%;
    height: 100%;
    fill: ${colors?.bg_success};
`;

const SIcon = styled.div`
    position: relative;
    svg {
        width: 100%;
        display: block;
        width: 6em;
    }
`;
const SText = styled.div`
    position: relative;
    span {
        display: block;
        margin-top: ${spacings?.offset_20};
        font-size: ${fonts?.fs_20};
        font-weight: ${fonts?.fw_medium};
    }
    div {
        font-size: ${fonts?.fs_18};
        margin-top: 5px;
    }
`;

export default SuccessForm;
