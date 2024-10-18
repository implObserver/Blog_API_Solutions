import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

export const virtualPostSlice = createSlice({
    name: 'post/virtual',
    initialState,
    reducers: {
        addModel: (state: VirtualPost, action: PayloadAction<UpdateElement>) => {
            const models = state.post.models;
            const id = action.payload.currentModel.id;
            models.forEach((model, index) => {
                if (model.id === id && index > 1) {
                    models.splice(index + 1, 0, action.payload.newModel);
                }
            })
        },
        updateModel: (state: VirtualPost, action: PayloadAction<UpdateElement>) => {
            const models = state.post.models;
            const id = action.payload.currentModel.id;
            models.forEach((model, index) => {
                if (model.id === id) {
                    models.splice(index, 1, action.payload.newModel);
                }
            })
        },
        removeModel: (state: VirtualPost, action: PayloadAction<Model<TextModel | PreviewModel | TitleModel>>) => {
            const models = state.post.models;
            const id = action.payload.id;
            models.forEach((model, index) => {
                if (model.id === id && index > 2) {
                    models.splice(index, 1);
                }
            })
        },
        removeModels: (state: VirtualPost) => {
            state.post.models = [];
        },
        uploadModels: (state: VirtualPost, action: PayloadAction<Model<TextModel | PreviewModel | TitleModel>[]>) => {
            state.post.models = action.payload;
        },
        setPost: (state: VirtualPost, action: PayloadAction<Post>) => {
            console.log(action.payload)
            state.post = action.payload;
        },
        updateAuthor: (state: VirtualPost, action: PayloadAction<string>) => {
            state.post.author = action.payload;
        },
        updatePublishStatus: (state: VirtualPost, action: PayloadAction<boolean>) => {
            state.post.isPublished = action.payload;
        },
    },
})

export const virtualPostActions = virtualPostSlice.actions;
export const virtualPostReducer = virtualPostSlice.reducer;