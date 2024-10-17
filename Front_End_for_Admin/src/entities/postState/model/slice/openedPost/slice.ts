import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { updateModelsOfPost } from "./thunks/update/updateModelsOfPost";
import { updateTag } from "./thunks/update/updateTag";
import { updatePublishStatus } from "./thunks/update/updatePublishStatus";
import { updateAuthor } from "./thunks/update/updateAuthor";

const openedPostSlice = createSlice({
    name: 'openedPost',
    initialState,
    reducers: {
        addModel: (state: OpenedPost, action: PayloadAction<CellOfPost>) => {
            const elements = state.openedPost.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 1) {
                    elements.splice(index + 1, 0, action.payload.newModel);
                }
            });
        },
        updateModel: (state: OpenedPost, action: PayloadAction<CellOfPost>) => {
            const elements = state.openedPost.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    elements.splice(index, 1, action.payload.newModel);
                }
            });
        },
        updateAuthor: (state: OpenedPost, action: PayloadAction<string>) => {
            state.author = action.payload;
        },
        updateModels: (state: OpenedPost, action: PayloadAction<UpdateModels>) => {
            state.openedPost.elements = action.payload.models;
        },
        removeModel: (state: OpenedPost, action: PayloadAction<CellOfPost>) => {
            const elements = state.openedPost.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    elements.splice(index, 1);
                }
            });
        },
        setOpenedPost: (state: OpenedPost, action: PayloadAction<Post>) => {
            state.openedPost = action.payload;
        },
        reject: (state: OpenedPost) => {
            state.isPending = false;
        },
    },
    extraReducers: (builder) => {
        const setPendingStatus = (state: OpenedPost) => {
            state.isPending = true;
        };
        const setFulfilledStatus = (state: OpenedPost) => {
            state.isPending = false;
        };
        const setRejectedStatus = (state: OpenedPost) => {
            state.isPending = false;
        };

        const handleUpdateResponse = (state: OpenedPost, action: PayloadAction<any>) => {
            setFulfilledStatus(state);
            if (!action.payload.error) {
                state.openedPost = action.payload.data.message.updatedPost;
                state.error = null;
            } else {
                state.error = action.payload.data;
            }
        };

        const asyncActions = [
            { action: updateTag, handler: handleUpdateResponse },
            { action: updatePublishStatus, handler: handleUpdateResponse },
            { action: updateAuthor, handler: handleUpdateResponse },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, setPendingStatus)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, setRejectedStatus);
        });

        builder
            .addCase(updateModelsOfPost.pending, (state) => {
                state.updatePending = true;
            })
            .addCase(updateModelsOfPost.fulfilled, (state) => {
                state.updatePending = false;
            })
            .addCase(updateModelsOfPost.rejected, (state) => {
                state.updatePending = false;
            });
    },
});

export const openedPostActions = openedPostSlice.actions;
export const openedPostReducer = openedPostSlice.reducer;