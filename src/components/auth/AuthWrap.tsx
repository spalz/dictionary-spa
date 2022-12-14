import React from "react";
import styled from "styled-components";

import { Meta, Headline } from "@components/elements";
import { global, spacings } from "@styles/vars";

interface AuthWrapProps {
    title: string;
    children: React.ReactNode;
}

const AuthWrap: React.FC<AuthWrapProps> = ({ title, children }) => {
    return (
        <SAuthWrap>
            <Meta title={title} />
            <div>
                <Headline level={1} size="large" offset={["bottom-20"]}>
                    {title}
                </Headline>
                {children}
            </div>
        </SAuthWrap>
    );
};

const SAuthWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 ${spacings?.offset_wrapper};
    min-height: calc(
        (100vh - ${global?.header_height}) - ${spacings?.offset_20}
    );
    padding-bottom: ${global?.header_height};
    > div {
        width: 100%;
        max-width: 420px;
    }
`;

export default AuthWrap;
