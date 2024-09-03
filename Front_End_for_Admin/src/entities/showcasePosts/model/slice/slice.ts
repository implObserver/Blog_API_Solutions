import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getPostsOfUser } from "./thunks/get/getPostsOfUser";

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addModel: (state: Posts, action: PayloadAction<CellOfPost>) => {
            const index = action.payload.index;
            const post = state.posts[index];
            console.log(`payload: ${action.payload}`)
            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 1) {
                    elements.splice(index + 1, 0, action.payload.newModel);
                }
            })

        },
        updateModel: (state: Posts, action: PayloadAction<CellOfPost>) => {
            const index = action.payload.index;
            const post = state.posts[index];

            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    elements.splice(index, 1, action.payload.newModel);
                }
            })
        },
        removeModel: (state: Posts, action: PayloadAction<CellOfPost>) => {
            const index = action.payload.index;
            const post = state.posts[index];

            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    elements.splice(index, 1);
                }
            })
        },
        updateModels: (state: Posts, action: PayloadAction<UpdateModels>) => {
            const index = action.payload.index;
            state.posts[index].elements = action.payload.models;
        },
        uploadPosts: (state: Posts, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
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
                if (state.posts.length === 0) {
                    state.posts = action.payload;
                }
            })
            .addCase(getPostsOfUser.rejected, handleRejected)
    }
})

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;