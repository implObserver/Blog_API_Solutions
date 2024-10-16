import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getPostsOfUser } from "./thunks/get/getPostsOfUser";
import { addPost } from "./thunks/post/addPost";
import { deletePost } from "./thunks/delete/deletePost";

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setCurrentPage: (state: Posts, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setTotalPages: (state: Posts, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        },
        reject: (state: Posts) => {
            state.isPending = false;
        }
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
            .addCase(getPostsOfUser.pending, handlePending)
            .addCase(getPostsOfUser.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.posts = action.payload.data.message.posts;
                    state.totalPages = action.payload.data.message.totalPages;
                    state.totalPosts = action.payload.data.message.totalPosts
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(getPostsOfUser.rejected, handleRejected)

        builder
            .addCase(addPost.pending, handlePending)
            .addCase(addPost.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.totalPosts = action.payload.data.message.totalPosts
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(addPost.rejected, handleRejected)

        builder
            .addCase(deletePost.pending, handlePending)
            .addCase(deletePost.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.totalPosts = action.payload.data.message.totalPosts
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(deletePost.rejected, handleRejected)
    }
})

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;