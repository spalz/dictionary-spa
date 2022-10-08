import { configureStore } from "@reduxjs/toolkit";
import { wordsApi, categoriesApi, tagsApi } from "@redux";

export const store = configureStore({
    reducer: {
        [wordsApi.reducerPath]: wordsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [tagsApi.reducerPath]: tagsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            wordsApi.middleware,
            categoriesApi.middleware,
            tagsApi.middleware
        ),
});
