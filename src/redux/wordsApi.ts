import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
import { WordProps } from "@interfaces";

interface dataWord {
    data: WordProps[];
}

type WordsResponse = dataWord;

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
        getWords: build.query<WordsResponse, void>({
            query: () => "words",
            providesTags: (result) => {
                console.log("result", result);
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
