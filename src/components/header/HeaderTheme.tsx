import React, { useEffect } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import { useThemeSettings } from "../../utils";
import { down } from "@config/breakpoints_vars";
import { colors, global } from "@styles/vars";

const IconDay = dynamic(() => import("@icons/IconDay"), {
    ssr: false,
});
const IconNight = dynamic(() => import("@icons/IconNight"), {
    ssr: false,
});

const HeaderAssistPanel = () => {
    const { setOption, getOption } = useThemeSettings();
    const theme = getOption();
    const classname = `${theme}`;

    const onClickChangeTheme = () => {
        setOption(theme === "day" ? "night" : "day");
    };

    useEffect(() => {
        const body = window.document.body;
        body.classList.remove("day", "night");
        body.classList.add(classname);
    }, [classname]);

    return (
        <SHeaderTheme onClick={() => onClickChangeTheme()}>
            {classname === "day" ? <IconNight /> : <IconDay />}
        </SHeaderTheme>
    );
};

const SHeaderTheme = styled.div`
    border-radius: 50%;
    background-color: ${colors?.bg_beige};
    padding: 4px;
    cursor: pointer;
    transition: color ${global?.transition} ease-out;
    margin-left: 40px;
    ${down("sm")} {
        margin-left: 20px;
    }
    ${down("xs")} {
        margin-left: 10px;
    }
    &:hover {
        color: ${colors?.typo_link};
    }
    svg {
        width: 36px;
        height: 36px;
        ${down("sm")} {
            width: 28px;
            height: 28px;
        }
    }
`;

export default HeaderAssistPanel;
