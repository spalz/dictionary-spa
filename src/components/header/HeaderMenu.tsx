import React from "react";
import styled from "styled-components";
import { UrlObject } from "url";
declare type Url = string | UrlObject;

import { Link } from "@components/elements";
// import { down } from "@config/breakpoints_vars";
import { colors, spacings } from "@styles/vars";
import { MainR } from "@utils/routes";

interface HeaderMenuItemProps {
    title: string;
    href: Url;
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ title, href }) => {
    return (
        <SHeaderMenuItem>
            <Link href={href}>
                <a>{title}</a>
            </Link>
        </SHeaderMenuItem>
    );
};

const SHeaderMenuItem = styled.li`
    margin-right: ${spacings.offset_20};
    a.active {
        color: ${colors.typo_secondary};
    }
`;

const HeaderMenu = () => {
    return (
        <SHeaderMenu>
            <SList>
                <HeaderMenuItem href={MainR()} title="My words" />
                <HeaderMenuItem href={"/faq"} title="Faq" />
            </SList>
        </SHeaderMenu>
    );
};

const SHeaderMenu = styled.div`
    padding-left: ${spacings.offset_40};
`;
const SList = styled.ul`
    display: flex;
`;

export default HeaderMenu;
