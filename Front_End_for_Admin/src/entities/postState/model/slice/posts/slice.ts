import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getPostsOfUser } from "./thunks/get/getPostsOfUser";
import { addPost } from "./thunks/post/addPost";
import { deletePost } from "./thunks/delete/deletePost";
import { updateTitle } from "./thunks/update/updateTitle";
import { updatePost } from "./thunks/update/updatePost";

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setCurrentPage: (state: PostsState, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setTotalPages: (state: PostsState, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        },
        updatePost: (state: PostsState, action: PayloadAction<Post>) => {
            const posts = state.posts;
            const index = posts.findIndex(post => post.id === action.payload.id);
            posts.splice(index, 1, action.payload);
        },
        cancelRequest: (state: PostsState) => {
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        const setLoading = (state: PostsState) => {
            state.isLoading = true;
        };
        const setLoadingComplete = (state: PostsState) => {
            state.isLoading = false;
        };
        const setErrorState = (state: PostsState) => {
            state.isLoading = false;
        };

        const updateTotalPosts = (state: PostsState, action: PayloadAction<any>) => {
            setLoadingComplete(state);
            if (!action.payload.error) {
                state.totalPosts = action.payload.data.message.totalPosts;
            } else {
                state.error = action.payload.data;
            }
        };

        const updatePosts = (state: PostsState, action: PayloadAction<any>) => {
            updateTotalPosts(state, action);
            if (!action.payload.error) {
                state.posts = action.payload.data.message.posts;
                state.totalPages = action.payload.data.message.totalPages;
            }
        };

        const asyncActions = [
            { action: addPost, handler: updateTotalPosts },
            { action: deletePost, handler: updateTotalPosts },
            { action: updateTitle, handler: updateTotalPosts },
            { action: updatePost, handler: updateTotalPosts },
            { action: getPostsOfUser, handler: updatePosts },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, setLoading)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, setErrorState);
        });
    }
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;