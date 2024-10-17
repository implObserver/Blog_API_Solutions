import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

export const modlelsOfOpenedPostSlice = createSlice({
    name: 'post/models',
    initialState,
    reducers: {
        addModel: (state: ModelsData, action: PayloadAction<UpdateElement>) => {
            const models = state.models;
            const id = action.payload.currentModel.id;
            models.forEach((model, index) => {
                if (model.id === id && index > 1) {
                    models.splice(index + 1, 0, action.payload.newModel);
                }
            })
        },
        updateModel: (state: ModelsData, action: PayloadAction<UpdateElement>) => {
            const models = state.models;
            const id = action.payload.currentModel.id;
            models.forEach((model, index) => {
                if (model.id === id) {
                    models.splice(index, 1, action.payload.newModel);
                }
            })
        },
        removeModel: (state: ModelsData, action: PayloadAction<Model<TextModel | PreviewModel | TitleModel>>) => {
            const models = state.models;
            const id = action.payload.id;
            models.forEach((model, index) => {
                if (model.id === id && index > 2) {
                    models.splice(index, 1);
                }
            })
        },
        removeModels: (state: ModelsData) => {
            state.models = [];
        },
        uploadPosts: (state: ModelsData, action: PayloadAction<Model<TextModel | PreviewModel | TitleModel>[]>) => {
            state.models = action.payload;
        },
        updateAuthor: (state: ModelsData, action: PayloadAction<string>) => {
            state.author = action.payload;
        },
    },
})

export const modlelsOfOpenedPostActions = modlelsOfOpenedPostSlice.actions;
export const modlelsOfOpenedPostReducer = modlelsOfOpenedPostSlice.reducer;