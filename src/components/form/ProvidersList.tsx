import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import {
    IconGoogleColor,
    IconFacebookColor,
    IconGitHubColor,
    IconTwitterColor,
} from "@components/icons/auth";
import { colors, global, spacings, fonts } from "@styles/vars";
import { signIn } from "next-auth/react";
import { AuthLoginEmailR } from "@utils/routes";
import { down } from "@config/breakpoints_vars";

import { ProviderProps } from "@interfaces/auth";

interface ProvidersListItemProps {
    item: { name: string; id: string };
    tabIndex: number;
}

const Item: React.FC<ProvidersListItemProps> = ({
    item: { name, id },
    tabIndex,
}) => {
    return (
        <SItem
            tabIndex={tabIndex}
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
            <STitle className={name}>
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
    color: ${colors?.typo_primary};
    border: ${global?.border_width} solid ${colors?.form_base_border};
    margin-bottom: ${spacings.offset_10};
    border-radius: ${global.border_radius};
    transition: all ${global?.transition};
    padding: 0.6em 1em;
    /* flex: 1; */
    background: none;
    font-family: ${fonts.ff_base};
    font-size: ${fonts?.fs_16};
    /* width: 100%; */
    &:hover {
        border-color: ${colors?.form_hover_border};
    }
    &:focus,
    &:active {
        border-color: ${colors?.form_hover_border};
    }
    .compact & {
        justify-content: center;
        margin-bottom: 0;
        flex: auto;
    }
    &.Google,
    &.Facebook {
        /* flex: 1; */
    }
`;

const SIcon = styled.div`
    svg {
        height: 22px;
        ${down("sm")} {
            height: 18px;
        }
    }
`;

const STitle = styled.div`
    padding-left: 8px;
    .compact & {
        &.Github,
        &.Twitter {
            display: none;
        }
        ${down("sm")} {
            display: none;
        }
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
    const router = useRouter();

    return (
        providers && (
            <SProvidersList>
                <SList className={compact ? "compact" : ""}>
                    {Object.values(providers).map((provider, idx) => {
                        if (provider.name !== "Credentials") {
                            return (
                                <Item
                                    key={provider.name}
                                    tabIndex={idx + 41}
                                    item={provider}
                                />
                            );
                        }
                    })}
                    {!compact && (
                        <SItem
                            tabIndex={41}
                            onClick={() => router.push(AuthLoginEmailR())}
                        >
                            <STitle>Continue with Email</STitle>
                        </SItem>
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
        ${down("sm")} {
            gap: ${spacings.offset_5};
        }
    }
`;
const SOr = styled.div`
    margin: ${spacings.offset_10} 0;
    color: ${colors?.typo_secondary};
`;

export default ProvidersList;
