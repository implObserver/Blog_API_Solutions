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

            })
            .addCase(getAllPosts.rejected, handleRejected)
        builder
            .addCase(getPaginationPosts.pending, handlePending)
            .addCase(getPaginationPosts.fulfilled, (state, action) => {
                handleFulfilled(state);
                console.log(action.payload)
                if (!action.payload.error) {
                    state.posts = action.payload.data.message.posts;
                    state.totalPages = action.payload.data.message.totalPages;

                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(getPaginationPosts.rejected, handleRejected)

        builder
            .addCase(getPostToId.pending, handlePending)
            .addCase(getPostToId.fulfilled, (state, action) => {
                handleFulfilled(state);
                console.log(action.payload)
                if (!action.payload.error) {
                    console.log(`payload:${action.payload}`)
                    const index = state.posts.findIndex(post => post.id === action.payload.data.message.post.id);
                    console.log(`index:${index}`)
                    console.log(`posts before:${state.posts}`)
                    state.posts.splice(index, 1, action.payload.data.message.post);
                    console.log(`posts after:${state.posts}`)

                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(getPostToId.rejected, handleRejected)
    }
})

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;