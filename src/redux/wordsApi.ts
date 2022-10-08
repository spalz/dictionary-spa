import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
import { WordProps } from "@interfaces";

interface dataWord {
    data: WordProps[];
}

type WordsResponse = dataWord;

const q_page = (page: number) => {
    if (page) {
        return `pagination[page]=${page}&pagination[pageSize]=20`;
    } else {
        return "";
    }
};
const q_tag = (tag: number | string) => {
    if (tag !== "all") {
        return `&filters[tags][id][$eq]=${tag}`;
    } else {
        return "";
    }
};
const q_category = (category: number | string) => {
    if (category !== "all") {
        return `&filters[category][id][$eq]=${category}`;
    } else {
        return "";
    }
};

const query_cat = (category: number | string) =>
    `&filters[category][id][$eq]=${category}`;

export const wordsApi = createApi({
    reducerPath: "wordsApi",
    tagTypes: ["Words"],
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/`,
        prepareHeaders: async (headers) => {
            const jwt = await getSession().then((session) => session?.jwt);
            if (jwt) {
                headers.set("Authorization", `Bearer ${jwt}`);
            }
            return headers;
        },
    }),
    endpoints: (build) => ({
        getWords: build.query<
            WordsResponse,
            { page?: number; tag?: number | string; category?: number | string }
        >({
            query: ({ page = 1, tag = "all", category = "all" }) =>
                `words?${q_page(page)}${q_tag(tag)}${q_category(category)}`,
            providesTags: (result) => {
                return result
                    ? [
                          ...result.data.map(({ id }) => ({
                              type: "Words" as const,
                              id,
                          })),
                          { type: "Words", id: "LIST" },
                      ]
                    : [{ type: "Words", id: "LIST" }];
            },
        }),
        addWord: build.mutation({
            query: (data) => ({
                url: "words",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [{ type: "Words", id: "LIST" }],
        }),
        deleteWord: build.mutation({
            query: (id) => ({
                url: `words/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Words", id: "LIST" }],
        }),
    }),
});

export const { useGetWordsQuery, useAddWordMutation, useDeleteWordMutation } =
    wordsApi;
