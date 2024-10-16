import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { updateModelsOfPost } from "./thunks/update/updateModelsOfPost";
import { updateTag } from "./thunks/update/updateTag";
import { updatePublishStatus } from "./thunks/update/updatePublishStatus";

import { stat } from "fs";
import { updateAuthor } from "./thunks/update/updateAuthor";

const openedPostSlice = createSlice({
    name: 'openedPost',
    initialState,
    reducers: {
        addModel: (state: OpenedPost, action: PayloadAction<CellOfPost>) => {
            const post = state.openedPost;
            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 1) {
                    elements.splice(index + 1, 0, action.payload.newModel);
                }
            })

        },
        updateModel: (state: OpenedPost, action: PayloadAction<CellOfPost>) => {
            const post = state.openedPost;
            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    elements.splice(index, 1, action.payload.newModel);
                }
            })
        },
        updateAuthor: (state: OpenedPost, action: PayloadAction<string>) => {
            state.author = action.payload;
        },
        updateModels: (state: OpenedPost, action: PayloadAction<UpdateModels>) => {
            const post = state.openedPost;
            post.elements = action.payload.models;
        },
        removeModel: (state: OpenedPost, action: PayloadAction<CellOfPost>) => {
            const post = state.openedPost;
            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    elements.splice(index, 1);
                }
            })
        },
        setOpenedPost: (state: OpenedPost, action: PayloadAction<Post>) => {
            state.openedPost = action.payload;
        },
        reject: (state: OpenedPost) => {
            state.isPending = false;
        }
    },
    extraReducers: (builder) => {
        const handlePending = (state: OpenedPost) => {
            state.isPending = true;
        };
        const handleFulfilled = (state: OpenedPost) => {
            state.isPending = false;
        };
        const handleRejected = (state: OpenedPost) => {
            state.isPending = false;
        };

        builder
            .addCase(updateModelsOfPost.pending, (state) => {
                state.updatePending = true;
            })
            .addCase(updateModelsOfPost.fulfilled, (state, action) => {
                state.updatePending = false;
            })
            .addCase(updateModelsOfPost.rejected, (state) => {
                state.updatePending = false;
            })

        builder
            .addCase(updateTag.pending, handlePending)
            .addCase(updateTag.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.openedPost = action.payload.data.message.updatedPost;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(updateTag.rejected, handleRejected)

        builder
            .addCase(updatePublishStatus.pending, handlePending)
            .addCase(updatePublishStatus.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.openedPost = action.payload.data.message.updatedPost;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(updatePublishStatus.rejected, handleRejected)

        builder
            .addCase(updateAuthor.pending, handlePending)
            .addCase(updateAuthor.fulfilled, (state, action) => {
                handleFulfilled(state);
                console.log(action.payload)
                if (!action.payload.error) {
                    state.openedPost = action.payload.data.message.updatedPost;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(updateAuthor.rejected, handleRejected)
    }
})

export const openedPostActions = openedPostSlice.actions;
export const openedPostReducer = openedPostSlice.reducer;