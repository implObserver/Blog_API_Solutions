import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { updateTag } from "./thunks/put/updateTag";
import { updatePublishStatus } from "./thunks/put/updatePublishStatus";
import { updateAuthor } from "./thunks/put/updateAuthor";

const openedPostSlice = createSlice({
    name: 'openedPost',
    initialState,
    reducers: {
        addModel: (state: OpenedPostState, action: PayloadAction<PostCell>) => {
            const models = state.openedPost.models;
            const id = action.payload.model.id;
            models.forEach((element, index) => {
                if (element.id === id && index > 1) {
                    models.splice(index + 1, 0, action.payload.newModel);
                }
            });
        },
        updateModel: (state: OpenedPostState, action: PayloadAction<PostCell>) => {
            const models = state.openedPost.models;
            const id = action.payload.model.id;
            models.forEach((element, index) => {
                if (element.id === id) {
                    models.splice(index, 1, action.payload.newModel);
                }
            });
        },
        updateAuthor: (state: OpenedPostState, action: PayloadAction<string>) => {
            state.author = action.payload;
        },
        updateModels: (state: OpenedPostState, action: PayloadAction<UpdateModels>) => {
            state.openedPost.models = action.payload.models;
        },
        updateTag: (state: OpenedPostState, action: PayloadAction<string>) => {
            state.openedPost.tag = action.payload;
        },
        removeModel: (state: OpenedPostState, action: PayloadAction<PostCell>) => {
            const models = state.openedPost.models;
            const id = action.payload.model.id;
            models.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    models.splice(index, 1);
                }
            });
        },
        setOpenedPost: (state: OpenedPostState, action: PayloadAction<Post>) => {
            state.openedPost = action.payload;
        },
        reject: (state: OpenedPostState, action: PayloadAction<any>) => {
            state.test = action.payload;
        },
    },
    extraReducers: (builder) => {
        const setLoading = (state: OpenedPostState) => {
            state.isLoading = true;
        };
        const setLoadingComplete = (state: OpenedPostState) => {
            state.isLoading = false;
        };
        const setErrorState = (state: OpenedPostState) => {
            state.isLoading = false;
        };

        const updateOpenedPost = (state: OpenedPostState, action: PayloadAction<any>) => {
            setLoadingComplete(state);
            if (!action.payload.error) {
                state.isLoading = false;
                state.openedPost = action.payload.data.message.updatedPost;
                state.error = null;
            } else {
                state.error = action.payload.data;
            }
        };

        const asyncActions = [
            { action: updateTag, handler: updateOpenedPost },
            { action: updatePublishStatus, handler: updateOpenedPost },
            { action: updateAuthor, handler: updateOpenedPost },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, setLoading)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, setErrorState);
        });
    },
});

export const openedPostActions = openedPostSlice.actions;
export const openedPostReducer = openedPostSlice.reducer;