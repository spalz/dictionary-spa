import React from "react";
import styled from "styled-components";

import { Headline } from "@components/elements";
import { Layout, Container } from "@components/layout";
import { WordForm, CategoryForm, TagForm } from "@components/forms";

import type { NextPage } from "next";

const PrivacyPolicy: NextPage = () => {
    return (
        <Layout>
            <Container>
                <SBlock style={{ display: "flex", gap: "40px", width: "100%" }}>
                    <SFormBlock>
                        <Headline offset={["bottom-10"]}>Word</Headline>
                        <WordForm />
                    </SFormBlock>
                    <SFormBlock>
                        <Headline offset={["bottom-10"]}>Category</Headline>
                        {/* {categories &&
                            categories?.map((category: CategoryProps, idx) => (
                                <span
                                    key={idx}
                                    title={category.attributes.title}
                                >
                                    [{category.id}],{" "}
                                </span>
                            ))} */}
                        <CategoryForm />
                    </SFormBlock>
                    <SFormBlock>
                        <Headline offset={["bottom-10"]}>Tag</Headline>
                        {/* {tags &&
                            tags?.map((tag: TagProps, idx) => (
                                <span key={idx} title={tag.attributes.title}>
                                    [{tag.id}],{" "}
                                </span>
                            ))} */}
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
