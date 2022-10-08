import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import {
    useGetWordsQuery,
    useGetCategoriesQuery,
    useGetTagsQuery,
} from "@redux";
import { useSession } from "next-auth/react";

import { Headline, BaseButton } from "@components/elements";
import { Layout, Container } from "@components/layout";
import { Categories, Tags, WordList } from "@components";
import { colors, spacings, global } from "@styles/vars";
import { WordForm } from "@components/forms";

const Home: NextPage = () => {
    const { data: session } = useSession();

    const [showWordForm, setShowWordForm] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);

    const [tagSelected, setTagsSelected] = useState<number | string>("all");
    const [categorySelected, setCategorySelected] = useState<number | string>(
        "all"
    );

    const { data: data_words, isLoading: isLoadingWords } = useGetWordsQuery({
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

    const toggleWordForm = () => {
        setShowWordForm(!showWordForm);
    };

    return (
        <Layout>
            <Container>
                {session ? (
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
                                <Tags
                                    tags={data_tags?.data}
                                    onClickTag={onClickTag}
                                    tagSelected={tagSelected}
                                />
                                <SActions>
                                    <BaseButton
                                        style="secondary"
                                        size="small"
                                        onClick={() => toggleWordForm()}
                                    >
                                        {showWordForm
                                            ? "Hide form"
                                            : "Add Word"}
                                    </BaseButton>
                                    <BaseButton style="ghost" size="small">
                                        Create Quiz
                                    </BaseButton>
                                </SActions>
                            </SMainTop>
                            {showWordForm && (
                                <WordForm
                                    type="add"
                                    defaultCategory={categorySelected}
                                    defaultTag={tagSelected}
                                />
                            )}

                            <WordList
                                words={data_words?.data}
                                isLoading={isLoadingWords}
                            />

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
                ) : (
                    <SBanner>
                        <Headline level={1} size="huge">
                            Lexicon life
                        </Headline>
                    </SBanner>
                )}
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

const SBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${global?.header_height};
    height: calc(100vh - ${global?.header_height});
`;

export default Home;
