import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getPostsOfUser } from "./thunks/get/getPostsOfUser";
import { addPost } from "./thunks/post/addPost";
import { deletePost } from "./thunks/delete/deletePost";
import { updateModelsOfPost } from "./thunks/update/updateModelsOfPost";

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addModel: (state: Posts, action: PayloadAction<CellOfPost>) => {
            console.log(state)
            const post_id = action.payload.postid;
            const post = state.posts.find(post => post.id === post_id);
            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 1) {
                    elements.splice(index + 1, 0, action.payload.newModel);
                }
            })

        },
        updateModel: (state: Posts, action: PayloadAction<CellOfPost>) => {
            const post_id = action.payload.postid;
            const post = state.posts.find(post => post.id === post_id);
            console.log(post_id)
            console.log(current(state))
            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    elements.splice(index, 1, action.payload.newModel);
                }
            })
        },
        updateModels: (state: Posts, action: PayloadAction<UpdateModels>) => {
            const post_id = action.payload.post_id;
            const post = state.posts.find(post => post.id === post_id);
            console.log(state)
            post.elements = action.payload.models;
        },
        removeModel: (state: Posts, action: PayloadAction<CellOfPost>) => {
            const post_id = action.payload.postid;
            const post = state.posts.find(post => post.id === post_id);

            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    elements.splice(index, 1);
                }
            })
        },
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
                console.log(action.payload)
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
                console.log(action.payload)
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

        builder
            .addCase(updateModelsOfPost.pending, handlePending)
            .addCase(updateModelsOfPost.fulfilled, (state, action) => {
                console.log(`${action.payload} adadadadadadada`)
                handleFulfilled(state);
            })
            .addCase(updateModelsOfPost.rejected, handleRejected)
    }
})

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;