import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

export const modlelsOfOpenedPostSlice = createSlice({
    name: 'post/models',
    initialState,
    reducers: {
        addModel: (state: Models, action: PayloadAction<UpdateElement>) => {
            const models = state.models;
            const id = action.payload.model.id;
            models.forEach((model, index) => {
                if (model.id === id && index > 1) {
                    models.splice(index + 1, 0, action.payload.newModel);
                }
            })
        },
        updateModel: (state: Models, action: PayloadAction<UpdateElement>) => {
            const models = state.models;
            const id = action.payload.model.id;
            models.forEach((model, index) => {
                if (model.id === id) {
                    models.splice(index, 1, action.payload.newModel);
                }
            })
        },
        removeModel: (state: Models, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
            const models = state.models;
            const id = action.payload.id;
            models.forEach((model, index) => {
                if (model.id === id && index > 2) {
                    models.splice(index, 1);
                }
            })
        },
        removeModels: (state: Models) => {
            state.models = [];
        },
        uploadPosts: (state: Models, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>[]>) => {
            state.models = action.payload;
        }
    },
})

export const modlelsOfOpenedPostActions = modlelsOfOpenedPostSlice.actions;
export const modlelsOfOpenedPostReducer = modlelsOfOpenedPostSlice.reducer;