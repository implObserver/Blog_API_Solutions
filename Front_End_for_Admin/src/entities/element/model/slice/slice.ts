import { createSlice, current, isAction, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { saveElements } from "../../api/localStorage/saveElements";
import { elementsToModels } from "../../lib/helper/ElementsToModels";

const elementsSlice = createSlice({
    name: 'elements',
    initialState,
    reducers: {
        addElement: (state: ElementModels, action: PayloadAction<UpdateElement>) => {
            const elements = current(state.elements);
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    state.elements.splice(index + 1, 0, action.payload.newModel);
                }
            })

            saveElements(current(state.elements));
            console.log(current(state.elements))
        },
        updateElement: (state: ElementModels, action: PayloadAction<UpdateElement>) => {
            const elements = current(state.elements);
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    state.elements.splice(index, 1, action.payload.newModel);
                }
            })
            saveElements(current(state.elements));
        },
        removeElement: (state: ElementModels, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
            const elements = current(state.elements);
            const id = action.payload.id;
            console.log(id)
            elements.forEach((element, index) => {
                if (element.id === id) {
                    console.log(current(state.elements))
                    state.elements.splice(index, 1);
                    console.log(current(state.elements))
                }
            })
            saveElements(current(state.elements));
        },
        changeValue: (state: ElementModels, action: PayloadAction<string>) => {

        },
        saveToLocalStorage: (state: ElementModels) => {
            //saveElements(current(state.elements));
        }
    }
})

export const actions = elementsSlice.actions;
export default elementsSlice.reducer;