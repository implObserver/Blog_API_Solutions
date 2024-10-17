import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getPostsOfUser } from "./thunks/get/getPostsOfUser";
import { addPost } from "./thunks/post/addPost";
import { deletePost } from "./thunks/delete/deletePost";
import { updateTitle } from "./thunks/update/updateTitle";

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
        cancelRequest: (state: Posts) => {
            state.isPending = false;
        }
    },
    extraReducers: (builder) => {
        const setPendingStatus = (state: Posts) => {
            state.isPending = true;
        };
        const setFulfilledStatus = (state: Posts) => {
            state.isPending = false;
        };
        const setRejectedStatus = (state: Posts) => {
            state.isPending = false;
        };

        const handleFulfilledResponse = (state: Posts, action: PayloadAction<any>) => {
            setFulfilledStatus(state);
            if (!action.payload.error) {
                state.totalPosts = action.payload.data.message.totalPosts;
            } else {
                state.error = action.payload.data;
            }
        };

        builder
            .addCase(getPostsOfUser.pending, setPendingStatus)
            .addCase(getPostsOfUser.fulfilled, (state, action) => {
                setFulfilledStatus(state);
                if (!action.payload.error) {
                    state.posts = action.payload.data.message.posts;
                    state.totalPages = action.payload.data.message.totalPages;
                    state.totalPosts = action.payload.data.message.totalPosts;
                }
            })
            .addCase(getPostsOfUser.rejected, setRejectedStatus);

        builder
            .addCase(addPost.pending, setPendingStatus)
            .addCase(addPost.fulfilled, handleFulfilledResponse)
            .addCase(addPost.rejected, setRejectedStatus);

        builder
            .addCase(deletePost.pending, setPendingStatus)
            .addCase(deletePost.fulfilled, handleFulfilledResponse)
            .addCase(deletePost.rejected, setRejectedStatus);

        builder
            .addCase(updateTitle.pending, setPendingStatus)
            .addCase(updateTitle.fulfilled, handleFulfilledResponse)
            .addCase(updateTitle.rejected, setRejectedStatus);
    }
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;