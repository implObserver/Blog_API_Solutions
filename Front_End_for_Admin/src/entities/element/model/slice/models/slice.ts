import { createSlice, current, isAction, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { saveModels } from "../../../api/localStorage/saveModels";

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

            saveModels(current(state.models));
        },
        updateModel: (state: Models, action: PayloadAction<UpdateElement>) => {
            const elements = current(state.models);
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    state.models.splice(index, 1, action.payload.newModel);
                }
            })
            saveModels(current(state.models));
        },
        removeModel: (state: Models, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
            const elements = current(state.models);
            const id = action.payload.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    state.models.splice(index, 1);
                }
            })
            saveModels(current(state.models));
        },
        changeValue: (state: Models, action: PayloadAction<string>) => {

        },
        saveToLocalStorage: (state: Models) => {
            //saveElements(current(state.elements));
        }
    }
})

export const actions = modelsSlice.actions;
export default modelsSlice.reducer;