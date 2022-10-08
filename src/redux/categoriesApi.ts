import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
import { CategoryProps } from "@interfaces";

interface dataCategories {
    data: CategoryProps[];
}
interface dataCategory {
    data: CategoryProps;
}

type CategoriesResponse = dataCategories;

export const categoriesApi = createApi({
    reducerPath: "categoriesApi",
    tagTypes: ["Words", "Categories", "Tags"],
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
        getCategories: build.query<CategoriesResponse, void>({
            query: () => "categories?populate=*",
            providesTags: (result) => {
                return result
                    ? [
                          ...result.data.map(({ id }) => ({
                              type: "Categories" as const,
                              id,
                          })),
                          { type: "Categories", id: "LIST" },
                      ]
                    : [{ type: "Categories", id: "LIST" }];
            },
        }),
        getOneCat: build.query<dataCategory, number | string | undefined>({
            query: (id) => `categories/${id}`,
        }),
        addCategory: build.mutation({
            query: (data) => ({
                url: "categories",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [{ type: "Categories", id: "LIST" }],
        }),
        deleteCategory: build.mutation({
            query: (id) => ({
                url: `categories/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Categories", id: "LIST" }],
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useGetOneCatQuery,
    useAddCategoryMutation,
    useDeleteCategoryMutation,
} = categoriesApi;
