import React from "react";
import styled from "styled-components";
import {
    useGetWordsQuery,
    useGetCategoriesQuery,
    useGetTagsQuery,
    useDeleteWordMutation,
    useDeleteCategoryMutation,
    useDeleteTagMutation,
} from "@redux";
import type { NextPage } from "next";

import { Headline } from "@components/elements";
import { Layout, Container } from "@components/layout";
import { WordForm, CategoryForm, TagForm } from "@components/forms";

import { WordProps, CategoryProps, TagProps } from "@interfaces";

const PrivacyPolicy: NextPage = () => {
    const { data: data_words } = useGetWordsQuery();
    const { data: data_categories } = useGetCategoriesQuery();
    const { data: data_tags } = useGetTagsQuery();
    const [deleteTag, {}] = useDeleteTagMutation();
    const [deleteCategory, {}] = useDeleteCategoryMutation();
    const [deleteWord, {}] = useDeleteWordMutation();

    return (
        <Layout>
            <Container>
                <SBlock style={{ display: "flex", gap: "40px", width: "100%" }}>
                    <SFormBlock>
                        <Headline offset={["bottom-10"]}>Word</Headline>
                        {data_words?.data?.map(
                            (word: WordProps, idx: number) => (
                                <span
                                    key={idx}
                                    onClick={() => {
                                        deleteWord(word.id);
                                    }}
                                >
                                    [{word.id}, {word.attributes.word}
                                    ],{" "}
                                </span>
                            )
                        )}
                        <WordForm />
                    </SFormBlock>
                    <SFormBlock>
                        <Headline offset={["bottom-10"]}>Category</Headline>
                        {data_categories?.data?.map(
                            (category: CategoryProps, idx: number) => (
                                <span
                                    key={idx}
                                    onClick={() => {
                                        deleteCategory(category.id);
                                    }}
                                >
                                    [{category.id}, {category.attributes.title}
                                    ],{" "}
                                </span>
                            )
                        )}
                        <CategoryForm />
                    </SFormBlock>
                    <SFormBlock>
                        <Headline offset={["bottom-10"]}>Tag</Headline>
                        {data_tags?.data?.map((tag: TagProps, idx) => (
                            <span
                                key={idx}
                                onClick={() => {
                                    deleteTag(tag.id);
                                }}
                            >
                                [{tag.id}, {tag.attributes.title}],{" "}
                            </span>
                        ))}
                        <TagForm />
                    </SFormBlock>
                </SBlock>
            </Container>
        </Layout>
    );
};

const SBlock = styled.div``;
const SFormBlock = styled.div`
    flex: 1;
`;

export default PrivacyPolicy;
