import { createSlice, current, isAction, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const modelsSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        addModel: (state: Models, action: PayloadAction<UpdateElement>) => {
            const elements = current(state.models);
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 1) {
                    state.models.splice(index + 1, 0, action.payload.newModel);
                }
            })
        },
        updateModel: (state: Models, action: PayloadAction<UpdateElement>) => {
            const elements = current(state.models);
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    state.models.splice(index, 1, action.payload.newModel);
                }
            })
        },
        removeModel: (state: Models, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
            const elements = current(state.models);
            const id = action.payload.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    state.models.splice(index, 1);
                }
            })
        },
        changeValue: (state: Models, action: PayloadAction<string>) => {

        },
        loadPostModels: (state: Models, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>[]>) => {
            state.models = action.payload;
        }
    }
})

export const modelsActions = modelsSlice.actions;
export const modelsReducer = modelsSlice.reducer;