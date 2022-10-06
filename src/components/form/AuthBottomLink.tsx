import React from "react";
import styled from "styled-components";

import { Link } from "@components/elements";
import { colors, fonts } from "@styles/vars";

interface AuthBottomLinkProps {
    text?: string;
    title: string;
    href: string;
    secondary?: boolean;
}

const AuthBottomLink: React.FC<AuthBottomLinkProps> = ({
    text,
    title,
    href,
    secondary,
}) => {
    return (
        <SAuthBottomLink className={secondary ? "secondary" : ""}>
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
    &.secondary {
        font-weight: ${fonts?.fw_regular};
        a {
            color: ${colors?.typo_secondary};
            &:hover {
                color: ${colors?.typo_link_hover};
            }
        }
    }
`;

export default AuthBottomLink;
