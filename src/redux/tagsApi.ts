import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
import { TagProps } from "@interfaces";

interface dataTags {
    data: TagProps[];
}
interface dataTag {
    data: TagProps;
}

type TagsResponse = dataTags;

export const tagsApi = createApi({
    reducerPath: "tagsApi",
    tagTypes: ["Tags"],
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
        getTags: build.query<TagsResponse, void>({
            query: () => "tags?populate=*",
            providesTags: (result) => {
                return result
                    ? [
                          ...result.data.map(({ id }) => ({
                              type: "Tags" as const,
                              id,
                          })),
                          { type: "Tags", id: "LIST" },
                      ]
                    : [{ type: "Tags", id: "LIST" }];
            },
        }),
        getOneTag: build.query<dataTag, number | string | undefined>({
            query: (id) => `tags/${id}`,
        }),
        addTag: build.mutation({
            query: (data) => ({
                url: "tags",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [{ type: "Tags", id: "LIST" }],
        }),
        deleteTag: build.mutation({
            query: (id) => ({
                url: `tags/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Tags", id: "LIST" }],
        }),
    }),
});

export const {
    useGetTagsQuery,
    useGetOneTagQuery,
    useAddTagMutation,
    useDeleteTagMutation,
} = tagsApi;
