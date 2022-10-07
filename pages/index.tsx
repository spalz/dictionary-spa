import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import axios from "axios";

import { BaseButton } from "@components/elements";
import { Layout, Container } from "@components/layout";
import { Categories, Tags } from "@components";
import { TagProps, CategoryProps, WordProps } from "@interfaces";
import { colors, spacings } from "@styles/vars";

import Word from "@components/Word";

const Home: NextPage = () => {
    const { data: session, status } = useSession();

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [words, setData] = useState<Array<WordProps>>();
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);

    const [tags, setTags] = useState<Array<TagProps>>();
    const [tagSelected, setTagsSelected] = useState<number | string>("all");

    const [categories, setCategories] = useState<Array<CategoryProps>>();
    const [categorySelected, setCategorySelected] = useState<number | string>(
        "all"
    );

    // console.group("next-auth session");
    // console.log("session:", session);
    // console.log("words:", words);
    // console.log("status:", status);
    console.groupEnd();

    useEffect(() => {
        const jwt = session?.jwt
            ? {
                  headers: {
                      Authorization: `Bearer ${session?.jwt}`,
                  },
              }
            : null;

        if (session?.jwt) {
            axios
                .get(
                    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/words?pagination[page]=1&pagination[pageSize]=10`,
                    {
                        ...jwt,
                    }
                )
                .then((result) => {
                    setData(result.data.data);
                    setPage(result.data.meta.pagination.page);
                    setPageCount(result.data.meta.pagination.pageCount);
                    setIsLoaded(true);
                })
                .catch((error) => console.error(error));

            axios
                .get(
                    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/tags?populate=*`,
                    {
                        ...jwt,
                    }
                )
                .then((result) => setTags(result.data.data))
                .catch((error) => console.error(error));

            axios
                .get(
                    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/categories?populate=*"`,
                    {
                        ...jwt,
                    }
                )
                .then((result) => setCategories(result.data.data))
                .catch((error) => console.error(error));
        }
    }, [session]);

    const onClickCategory = (id: number | string) => {
        setCategorySelected(id);
        setTagsSelected("all");
    };

    const onClickPage = (num: number) => {
        setPage(num);
    };

    const onClickTag = (id: number | string) => {
        setTagsSelected(id);
    };

    useEffect(() => {
        setIsLoaded(false);

        const jwt = session?.jwt
            ? {
                  headers: {
                      Authorization: `Bearer ${session?.jwt}`,
                  },
              }
            : null;

        const qs = require("qs");

        const main_categories = [
            {
                filters:
                    categorySelected !== "all"
                        ? {
                              category: {
                                  id: {
                                      $eq: categorySelected,
                                  },
                              },
                          }
                        : undefined,
            },
            {
                encodeValuesOnly: true,
            },
        ];
        const main_query = [
            {
                pagination: {
                    page: page,
                    pageSize: 10,
                },
                filters:
                    tagSelected !== "all"
                        ? {
                              tags: {
                                  id: {
                                      $eq: tagSelected,
                                  },
                              },
                          }
                        : undefined,
            },
            {
                encodeValuesOnly: true,
            },
        ];
        const main_query_clear = qs.stringify(...main_query);
        const categories_query_clear = `&${qs.stringify(...main_categories)}`;
        const link = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/words?${main_query_clear}${categories_query_clear}`;
        axios
            .get(link, {
                ...jwt,
            })
            .then((result) => {
                setData(result.data.data);
                setPageCount(result.data.meta.pagination.pageCount);
                setPage(
                    result.data.meta.pagination.pageCount <= 1
                        ? 1
                        : result.data.meta.pagination.page
                );
                setIsLoaded(true);
            })
            .catch((error) => console.error(error));
    }, [page, tagSelected, categorySelected]);

    return (
        <Layout>
            <Container>
                {/* {isLoaded ?  <Loader bg={true} type="fixed" />} */}
                {/* {isLoaded ? "true" : "false"} */}

                <br />
                <br />
                <br />
                <br />
                <SBlock>
                    {categories ? (
                        <Categories
                            onClickCategory={onClickCategory}
                            categories={categories}
                            categorySelected={categorySelected}
                        />
                    ) : null}

                    <SMain>
                        <SMainTop>
                            {categorySelected === "all" ? (
                                <Tags
                                    tags={tags}
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
                        {words ? (
                            <SWordsList>
                                {words?.map((item: WordProps) => {
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
