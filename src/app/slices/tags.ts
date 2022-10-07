import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import TagDataService from "../services/tags.service";
import { TagAttributesProps } from "@interfaces";

interface TagsState {
    error: string | null | undefined;
    entities: Record<string, TagAttributesProps>;
}

const initialState = {
    entities: {},
    error: null,
} as TagsState;

export const retrieveTags = createAsyncThunk("tags/retrieve", async () => {
    const res = await TagDataService.getAll();
    return res.data;
});

export const createTag = createAsyncThunk(
    "tags/create",
    async (title: string, thunkAPI) => {
        const res = await TagDataService.create({ title });
        return res.data;
    }
);

// export const updateTag = createAsyncThunk(
//     "tags/update",
//     async ({ id, data }) => {
//         const res = await TagDataService.update(id, data);
//         return res.data;
//     }
// );

// export const deleteTag = createAsyncThunk("tags/delete", async ({ id }) => {
//     await TagDataService.delete(id);
//     return { id };
// });

// export const findTagsByTitle = createAsyncThunk(
//     "tags/findByTitle",
//     async ({ title }) => {
//         const res = await TagDataService.findByTitle(title);
//         return res.data;
//     }
// );

const tagSlice = createSlice({
    name: "tag",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(retrieveTags.fulfilled, (_, action) => action.payload);
        builder.addCase(createTag.fulfilled, (state, action) => {
            state.push(action.payload);
        });
    },
});

export default tagSlice.reducer;
