import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllPosts } from "./thunks/get/getAllPosts";
import { initialState } from "./defaultState";
import { getPaginationPosts } from "./thunks/get/getPaginationPost";
import { getPostToId } from "./thunks/get/getPostToId";

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
    },
    extraReducers: (builder) => {
        const setLoading = (state: Posts) => {
            state.isLoading = true;
        };

        const setLoadingComplete = (state: Posts) => {
            state.isLoading = false;
        };

        const setErrorState = (state: Posts) => {
            state.isLoading = false;
        };

        const getPosts = (state: Posts, action: PayloadAction<any>) => {
            setLoadingComplete(state);
            if (!action.payload.error) {
                state.posts = action.payload.data.message.posts;
                state.totalPages = action.payload.data.message.totalPages;
            } else {
                state.error = action.payload.data;
            }
        }

        const updatePost = (state: Posts, action: PayloadAction<any>) => {
            setLoadingComplete(state);
            if (!action.payload.error) {
                const index = state.posts.findIndex(post => post.id === action.payload.data.message.post.id);
                state.posts.splice(index, 1, action.payload.data.message.post);
            } else {
                state.error = action.payload.data;
            }
        }

        const asyncActions = [
            { action: getPaginationPosts, handler: getPosts },
            { action: getPostToId, handler: updatePost },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, setLoading)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, setErrorState);
        });
    }
})

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;