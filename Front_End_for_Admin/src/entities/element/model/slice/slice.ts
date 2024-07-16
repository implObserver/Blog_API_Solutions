import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { saveElements } from "../../api/localStorage/saveElements";

const elementsSlice = createSlice({
    name: 'elements',
    initialState,
    reducers: {
        addElement: (state: ElementModels, action: PayloadAction<ElementModel>) => {
            state.elements.push(action.payload);
        },
        addElementToIndex: (state: ElementModels, action: PayloadAction<ElementModel>) => {
            const elements = current(state.elements);
            const index = elements.indexOf(action.payload);
            console.log(index)
            //const defaultElement = getDefaultElementModel();
            //state.elements.splice(index, 0, defaultElement);
        },
        addTextAreaModel: (state: ElementModels, action: PayloadAction<ElementModel>) => {
            const elements = current(state.elements);
            const index = elements.indexOf(action.payload) + 1;
            const textAreaModel: ElementModel = {
                index,
                panel: {
                    visible: true,
                },
                container: {
                    nNum: 'none',
                    value: '',
                    type: 'text',
                }
            }
            state.elements.splice(index, 0, textAreaModel);
        },
        removeElement: (state: ElementModels, action: PayloadAction<number>) => {
            const index = action.payload;
            console.log(current(state.elements[index]))
            //if (current(state.elements.length) > 1) {
            //state.elements.splice(index, 1);
            //}
            //saveElements(state.elements);
        },
        changeValue: (state: ElementModels, action: PayloadAction<string>) => {

        },
        saveToLocalStorage: (state: ElementModels) => {
            saveElements(state.elements);
        }
    }
})

export const actions = elementsSlice.actions;
export default elementsSlice.reducer;