import React, { useState } from "react";
import styled from "styled-components";
import { position } from "polished";
import { useDeleteWordMutation } from "@redux";

import { WordForm } from "@components/forms";
import { WordProps } from "@interfaces";
import Speech from "@components/Speech";
import { IconEdit, IconDelete } from "@icons";
import { down } from "@config/breakpoints_vars";
import { colors, fonts, spacings, global } from "@styles/vars";
import { reset_button_style } from "@components/elements/button/button_styles";

const Word: React.FC<WordProps> = ({
    id,
    attributes,
    attributes: {
        word,
        translation,
        example,
        example_traslation,
        category,
        tags,
    },
}) => {
    const [deleteWord] = useDeleteWordMutation();
    const [edit, setEdit] = useState<boolean>(false);

    const toggleEdit = () => {
        setEdit(!edit);
    };

    return (
        <>
            <SWord>
                <SBlock>
                    <SWordEnglish>
                        <Speech text={word} />
                        <SWordEnglishText>
                            <span>{word}</span>
                            <STooltip>
                                <STooltipBlock>{translation}</STooltipBlock>
                                <STooltipSArrow />
                            </STooltip>
                        </SWordEnglishText>
                    </SWordEnglish>
                    <SExample>
                        {example}
                        {example_traslation ? (
                            <STooltip>
                                <STooltipBlock>
                                    {example_traslation}
                                </STooltipBlock>
                                <STooltipSArrow />
                            </STooltip>
                        ) : null}
                    </SExample>
                    <SActions>
                        <button style={reset_button_style}>
                            <SAction
                                onClick={() => toggleEdit()}
                                className={edit ? "active" : ""}
                            >
                                <IconEdit />
                            </SAction>
                        </button>
                        <button
                            style={reset_button_style}
                            onClick={() => deleteWord(id)}
                        >
                            <SAction onClick={() => console.log("add")}>
                                <IconDelete />
                            </SAction>
                        </button>
                    </SActions>
                </SBlock>
            </SWord>
            {edit ? (
                <WordForm
                    type="edit"
                    defaultValues={{
                        id,
                        attributes,
                    }}
                />
            ) : null}
        </>
    );
};

const SWord = styled.div`
    display: flex;
    width: 100%;
    & + div {
        margin-top: 0.5em;
    }
`;

const SBlock = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${colors?.bg_light};
    padding: ${spacings?.offset_10} ${spacings?.offset_10};
`;
const SWordEnglish = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.5em;
`;
const SWordEnglishText = styled.div`
    padding-left: 0.5em;
    position: relative;
    span {
        font-weight: ${fonts?.fw_medium};
    }
`;

const SExample = styled.div`
    position: relative;
    color: ${colors?.typo_secondary};
`;

const STooltip = styled.div`
    ${position("absolute", null, null, "100%", "0")};
    transform: translate(0, 3%);
    display: block;
    z-index: 20;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    z-index: 4;
    ${SWordEnglishText}:hover &,
    ${SExample}:hover & {
        visibility: visible;
        opacity: 1;
        transform: translate(0, -0.8em);
    }
`;
const STooltipBlock = styled.div`
    background-color: ${colors?.black};
    border-radius: ${global.border_radius};
    color: ${colors?.white};
    padding: 6px 10px 8px;
    line-height: 1.2;
    max-width: 260px;
    ${down("sm")} {
        width: 200px;
    }
`;
const STooltipSArrow = styled.div`
    position: absolute;
    left: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 10px 0 10px;
    margin: -1px 0 0 0;
    border-color: ${colors.black} transparent transparent transparent;
`;
const SActions = styled.div`
    display: flex;
    gap: ${spacings?.offset_10};
    margin-left: auto;
`;
const SAction = styled.div`
    display: block;
    padding: 0.5em;
    cursor: pointer;
    color: ${colors?.typo_secondary};
    opacity: 0;
    transition: all ${global.transition} ease-in-out;
    ${SBlock}:hover & {
        opacity: 1;
    }
    &:hover {
        color: ${colors.typo_link};
    }
    &.active {
        color: ${colors.typo_negative};
        opacity: 1;
    }
    svg {
        width: 1em;
        height: 1em;
    }
`;

export default Word;
