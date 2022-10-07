import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import tagReducer from "./slices/tags";

const reducer = {
    tags: tagReducer,
};

const store = configureStore({
    reducer: reducer,
    devTools: true,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;
