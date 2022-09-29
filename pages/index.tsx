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
    // console.log("status:", status);
    // console.log(
    //     "NEXT_PUBLIC_NEXTAUTH_URL:",
    //     process.env.NEXT_PUBLIC_NEXTAUTH_URL
    // );
    // console.groupEnd();

    useEffect(() => {
        fetch(
            "https://admin.dictionary.dangercactus.io/api/words?pagination[page]=1&pagination[pageSize]=10"
        )
            .then((resp) => resp.json())
            .then((result) => {
                setData(result.data);
                setPage(result.meta.pagination.page);
                setPageCount(result.meta.pagination.pageCount);
                setIsLoaded(true);
            })
            .catch((error) => console.error(error));

        fetch("https://admin.dictionary.dangercactus.io/api/tags?populate=*")
            .then((resp) => resp.json())
            .then((result) => setTags(result.data))
            .catch((error) => console.error(error));
        fetch(
            "https://admin.dictionary.dangercactus.io/api/categories?populate=*"
        )
            .then((resp) => resp.json())
            .then((result) => setCategories(result.data))
            .catch((error) => console.error(error));
    }, []);

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
        const link = `https://admin.dictionary.dangercactus.io/api/words?${main_query_clear}${categories_query_clear}`;
        fetch(link)
            .then((resp) => resp.json())
            .then((result) => {
                setData(result.data);
                setPageCount(result.meta.pagination.pageCount);
                setPage(
                    result.meta.pagination.pageCount <= 1
                        ? 1
                        : result.meta.pagination.page
                );
                setIsLoaded(true);
            })
            .catch((error) => console.error(error));
    }, [page, tagSelected, categorySelected]);

    const registerNewUser = () => {
        axios
            .post(
                `${process.env.NEXT_PUBLIC_STRSPI_API_URL}/api/auth/local/register`,
                {
                    username: "Strapi new user 4",
                    email: "user4@strapi.io",
                    password: "1975805",
                }
            )
            .then((response) => {
                // Handle success.
                console.group("Well done!");
                console.log("User profile", response.data.user);
                console.log("User token", response.data.jwt);
                console.groupEnd();
            })
            .catch((error) => {
                // Handle error.
                console.log("An error occurred:", error.response);
            });
    };

    const authNewUser = () => {
        axios
            .post(`${process.env.NEXT_PUBLIC_STRSPI_API_URL}/api/auth/local`, {
                identifier: "user@strapi.io",
                password: "1975805",
            })
            .then((response) => {
                // Handle success.
                console.log("Well done!");
                console.log("User profile", response.data.user);
                console.log("User token", response.data.jwt);
            })
            .catch((error) => {
                // Handle error.
                console.log("An error occurred:", error.response);
            });
    };

    return (
        <Layout>
            <Container>
                {/* {isLoaded ?  <Loader bg={true} type="fixed" />} */}
                {/* {isLoaded ? "true" : "false"} */}
                <SBlock>
                    <Categories
                        categories={categories}
                        onClickCategory={onClickCategory}
                        categorySelected={categorySelected}
                    />

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
                        {words && pageCount <= 1 ? null : (
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
                        <div onClick={() => registerNewUser()}>
                            add new user
                        </div>
                        <div onClick={() => authNewUser()}>auth user</div>
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
