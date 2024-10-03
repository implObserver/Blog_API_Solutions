import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllPosts } from "./thunks/get/getAllPosts";
import { initialState } from "./defaultState";

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        const handlePending = (state: Posts) => {
            state.isPending = true;
        };
        const handleFulfilled = (state: Posts) => {
            state.isPending = false;
        };
        const handleRejected = (state: Posts) => {
            state.isPending = false;
        };

        builder
            .addCase(getAllPosts.pending, handlePending)
            .addCase(getAllPosts.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.posts = action.payload.data.message;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(getAllPosts.rejected, handleRejected)
    }
})

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;