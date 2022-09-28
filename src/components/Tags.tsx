import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CN from "classnames";

import { TagProps } from "@interfaces";
import { colors, spacings, global } from "@styles/vars";

interface Tags {
    tags?: Array<TagProps>;
    onClickTag: (id: number | string) => void;
    tagSelected: number | string;
}

const Categories: React.FC<Tags> = ({ tags, onClickTag, tagSelected }) => {
    return (
        <STags>
            <STagsBlock>
                <STagItem
                    onClick={() => onClickTag("all")}
                    className={CN({ active: "all" === tagSelected })}
                >
                    All
                </STagItem>
                {tags?.map((category: TagProps) => (
                    <STagItem
                        key={category.id}
                        className={CN({ active: category.id === tagSelected })}
                        onClick={() => onClickTag(category.id)}
                    >
                        {category.attributes.title}
                    </STagItem>
                ))}
                <STagItem
                    className="add"
                    onClick={() => console.log("add tag")}
                >
                    Add tag
                </STagItem>
            </STagsBlock>
        </STags>
    );
};

const STags = styled.div`
    flex: 1;
`;

const STagsBlock = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const STagItem = styled.li`
    border-radius: ${global.border_radius};
    margin-left: 0;
    list-style: none;
    padding: 0.3em 0.5em;
    & + li {
        margin-left: 10px;
    }
    cursor: pointer;
    &.add {
        color: ${colors?.typo_secondary};
        &:hover {
        }
    }
    background-color: ${colors?.bg_body_border};
    &:hover {
        color: ${colors.typo_link};
    }
    &.active {
        background-color: ${colors?.bg_dark};
        color: ${colors.typo_inverse};
        pointer-events: none;
    }
`;

export default Categories;
