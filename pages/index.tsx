import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
    useGetWordsQuery,
    useGetCategoriesQuery,
    useGetTagsQuery,
} from "@redux";

import { BaseButton } from "@components/elements";
import { Layout, Container } from "@components/layout";
import { Categories, Tags } from "@components";
import { TagProps, CategoryProps, WordProps } from "@interfaces";
import { colors, spacings } from "@styles/vars";

import Word from "@components/Word";

const Home: NextPage = () => {
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);

    const [tagSelected, setTagsSelected] = useState<number | string>("all");
    const [categorySelected, setCategorySelected] = useState<number | string>(
        "all"
    );

    const { data: data_words } = useGetWordsQuery({
        page: page,
        tag: tagSelected,
        category: categorySelected,
    });
    const { data: data_categories } = useGetCategoriesQuery();
    const { data: data_tags } = useGetTagsQuery();

    const onClickPage = (num: number) => {
        setPage(num);
    };

    const onClickCategory = (id: number | string) => {
        setCategorySelected(id);
        setTagsSelected("all");
    };

    const onClickTag = (id: number | string) => {
        setTagsSelected(id);
    };

    return (
        <Layout>
            <Container>
                <SBlock>
                    {data_categories ? (
                        <Categories
                            onClickCategory={onClickCategory}
                            categories={data_categories.data}
                            categorySelected={categorySelected}
                        />
                    ) : null}

                    <SMain>
                        <SMainTop>
                            {categorySelected === "all" ? (
                                <Tags
                                    tags={data_tags?.data}
                                    onClickTag={onClickTag}
                                    tagSelected={tagSelected}
                                />
                            ) : null}
                            <SActions>
                                <BaseButton style="secondary" size="small">
                                    Add Word
                                </BaseButton>
                                <BaseButton style="ghost" size="small">
                                    Create Quiz
                                </BaseButton>
                            </SActions>
                        </SMainTop>
                        {data_words ? (
                            <SWordsList>
                                {data_words?.data?.map((item: WordProps) => {
                                    return (
                                        <Word
                                            key={item.id}
                                            attributes={item.attributes}
                                        ></Word>
                                    );
                                })}
                            </SWordsList>
                        ) : null}
                        {pageCount <= 1 ? null : (
                            <SPagination>
                                <div>Prev</div>
                                <SPaginationPages>
                                    {Array(pageCount)
                                        .fill(0)
                                        .map((_, index) => (
                                            <SPage
                                                key={index + 1}
                                                className={
                                                    index + 1 === page
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() => {
                                                    onClickPage(index + 1);
                                                }}
                                            >
                                                {index + 1}
                                            </SPage>
                                        ))}
                                </SPaginationPages>
                                <div>Next</div>
                            </SPagination>
                        )}
                    </SMain>
                </SBlock>
            </Container>
        </Layout>
    );
};

const SBlock = styled.div`
    display: flex;
`;

const SMain = styled.div`
    width: 100%;
    padding-left: ${spacings.offset_40};
`;

const SMainTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: ${spacings?.offset_20}; ;
`;

const SActions = styled.div`
    display: flex;
    gap: ${spacings.offset_10};
`;

const SWordsList = styled.div``;

const SPagination = styled.div`
    display: flex;
    align-items: center;
    margin: ${spacings?.offset_40} 0 0;
`;
const SPaginationPages = styled.ul`
    margin: 0 ${spacings?.offset_20} 0;
    display: flex;
`;
const SPage = styled.li`
    padding: 0.5em;
    border-radius: 5px;
    margin: 0 0.5em;
    background-color: ${colors?.bg_body_border};
    &.active {
        background-color: ${colors?.bg_dark};
        color: ${colors.typo_inverse};
    }
`;

export default Home;
