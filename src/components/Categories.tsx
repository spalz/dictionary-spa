import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CN from "classnames";

import { CategoryProps } from "@interfaces";
import { colors, spacings, fonts } from "@styles/vars";

interface Categories {
    categories?: Array<CategoryProps>;
    onClickCategory: (id: number | string) => void;
    categorySelected: number | string;
}

const Categories: React.FC<Categories> = ({
    categories,
    onClickCategory,
    categorySelected,
}) => {
    return (
        <SCategories>
            <SCategoriesBlock>
                <SCategoryItem
                    className={CN({
                        active: "all" === categorySelected,
                    })}
                    onClick={() => onClickCategory("all")}
                >
                    All category
                </SCategoryItem>
                {categories?.map((category: CategoryProps) => (
                    <SCategoryItem
                        key={category.id}
                        className={CN({
                            active: category.id === categorySelected,
                        })}
                        onClick={() => onClickCategory(category.id)}
                    >
                        {category.attributes.title}
                        {category?.attributes?.words ? (
                            <span>{category.attributes.words.data.length}</span>
                        ) : null}
                    </SCategoryItem>
                ))}
                <SCategoryItem
                    className="add"
                    onClick={() => console.log("add tag")}
                >
                    Add category
                </SCategoryItem>
            </SCategoriesBlock>
        </SCategories>
    );
};

const SCategories = styled.div`
    width: 300px;
`;
const SCategoriesBlock = styled.ul`
    position: sticky;
    top: ${spacings.offset_20};
    margin: 0;
    padding: 0;
`;
const SCategoryItem = styled.li`
    border-radius: 5px;
    margin-top: 0;
    list-style: none;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 0.3em 0;
    font-weight: ${fonts.fw_medium};
    font-size: ${fonts.fs_20};
    cursor: pointer;
    span {
        color: ${colors.typo_secondary};
        padding-left: 0.5em;
    }
    &.add {
        color: ${colors?.typo_secondary};
        &:hover {
        }
    }
    & + li {
        margin-top: 10px;
    }
    /* background-color: ${colors?.bg_body_border}; */
    &:hover {
        color: ${colors.typo_link};
    }
    &.active {
        /* background-color: ${colors?.bg_dark}; */
        color: ${colors.typo_interactive};
        pointer-events: none;
    }
`;

export default Categories;
