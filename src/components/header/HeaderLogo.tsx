import React from "react";
import styled from "styled-components";

import { Link } from "@components/elements";
import { down } from "@config/breakpoints_vars";
import { colors } from "@styles/vars";
import { MainR } from "@utils/routes";

const HeaderLogo = () => {
    return (
        <SHeaderLogo>
            <Link href="/">
                <a href={MainR()}>Logo</a>
            </Link>
        </SHeaderLogo>
    );
};

const SHeaderLogo = styled.div`
    position: relative;
    z-index: 2;
    a {
        &:hover {
            color: ${colors?.typo_secondary};
        }
        svg {
            width: 160px;
            ${down("lg")} {
                width: 140px;
            }
            ${down("md")} {
                width: 120px;
            }
            ${down("sm")} {
                width: 110px;
            }
            ${down("xs")} {
                width: 100px;
            }
        }
        &.active {
            color: ${colors?.typo_primary};
        }
    }
`;

export default HeaderLogo;
