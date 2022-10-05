import React from "react";
import styled from "styled-components";

import { Link } from "@components/elements";
import { fonts } from "@styles/vars";

interface AuthBottomLinkProps {
    text?: string;
    title: string;
    href: string;
}

const AuthBottomLink: React.FC<AuthBottomLinkProps> = ({
    text,
    title,
    href,
}) => {
    return (
        <SAuthBottomLink>
            {text ? <span>{text}</span> : null}
            <Link href={href}>
                <a>{title}</a>
            </Link>
        </SAuthBottomLink>
    );
};

const SAuthBottomLink = styled.div`
    font-weight: ${fonts?.fw_medium};
    span {
        padding-right: 0.2em;
    }
`;

export default AuthBottomLink;
