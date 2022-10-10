import React, { useEffect } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import { useThemeSettings } from "@utils";
import { down } from "@config/breakpoints_vars";
import { SubmitButton } from "@components/elements";
import { colors, global, spacings } from "@styles/vars";

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
        <SHeaderTheme>
            <SubmitButton
                size="small"
                style="ghost_stroke"
                padding_small={true}
                onClick={() => onClickChangeTheme()}
            >
                {classname === "day" ? <IconNight /> : <IconDay />}
            </SubmitButton>
        </SHeaderTheme>
    );
};

const SHeaderTheme = styled.div`
    svg {
        width: 22px;
        height: 22px;
        ${down("sm")} {
        }
    }
`;

export default HeaderAssistPanel;
