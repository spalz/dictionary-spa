import React from "react";
import styled from "styled-components";

import {
    IconGoogleColor,
    IconFacebookColor,
    IconGitHubColor,
    IconTwitterColor,
} from "@components/icons/auth";
import { Link } from "@components/elements";
import { colors, global, spacings } from "@styles/vars";
import { signIn } from "next-auth/react";
import { AuthLoginEmailR } from "@utils/routes";

import { ProviderProps } from "@interfaces/auth";

interface ProvidersListItemProps {
    item: { name: string; id: string };
}

const Item: React.FC<ProvidersListItemProps> = ({ item: { name, id } }) => {
    return (
        <SItem
            onClick={() =>
                signIn(id, {
                    callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/`,
                })
            }
        >
            <SIcon>
                {name === "Facebook" ? (
                    <IconFacebookColor />
                ) : name === "Google" ? (
                    <IconGoogleColor />
                ) : name === "Twitter" ? (
                    <IconTwitterColor />
                ) : name === "Github" ? (
                    <IconGitHubColor />
                ) : null}
            </SIcon>
            <STitle>
                <span>Continue with</span> {name}
            </STitle>
        </SItem>
    );
};

const SItem = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color ${global?.transition};
    cursor: pointer;
    color: ${colors?.typo_secondary};
    border: ${global.border_width} solid ${colors.form_base_border};
    margin-bottom: ${spacings.offset_10};
    border-radius: ${global.border_radius};
    padding: 0.5em 0.5em;
    flex: 1;
    &:hover {
        color: ${colors?.typo_interactive};
    }
    .compact & {
        margin-bottom: 0;
    }
`;

const SIcon = styled.div`
    svg {
        width: 22px;
        height: 22px;
    }
`;

const STitle = styled.div`
    padding-left: 8px;
    .compact & {
        span {
            display: none;
        }
    }
`;

interface ProvidersListProps {
    providers: Array<ProviderProps>;
    compact?: boolean;
}

const ProvidersList: React.FC<ProvidersListProps> = ({
    providers,
    compact = false,
}) => {
    return (
        providers && (
            <SProvidersList>
                <SList className={compact ? "compact" : ""}>
                    {Object.values(providers).map((provider) => {
                        if (provider.name !== "Credentials") {
                            return <Item key={provider.name} item={provider} />;
                        }
                    })}
                    {!compact && (
                        <Link href={AuthLoginEmailR()}>
                            <SItem>
                                <STitle>Continue with Email</STitle>
                            </SItem>
                        </Link>
                    )}
                </SList>
                {compact && <SOr>Or</SOr>}
            </SProvidersList>
        )
    );
};

const SProvidersList = styled.div``;
const SList = styled.div`
    &.compact {
        display: flex;
        justify-content: space-between;
        gap: ${spacings.offset_10};
    }
`;
const SOr = styled.div`
    margin: ${spacings.offset_10} 0;
`;

export default ProvidersList;
