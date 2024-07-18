import { createSlice, current, isAction, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { saveElements } from "../../api/localStorage/saveElements";
import { elementsToModels } from "../../lib/helper/ElementsToModels";

const elementsSlice = createSlice({
    name: 'elements',
    initialState,
    reducers: {
        addElement: (state: ElementModels, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
            state.elements.push(action.payload);
        },
        updateElement: (state: ElementModels, action: PayloadAction<UpdateElement>) => {
            const elements = current(state.elements);
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === action.payload.model.id) {
                    state.elements.splice(index, 1, action.payload.newModel);
                }
            })
        },
        addElementToIndex: (state: ElementModels, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
            const elements = current(state.elements);
            const index = elements.indexOf(action.payload);
            console.log(index)
            //const defaultElement = getDefaultElementModel();
            //state.elements.splice(index, 0, defaultElement);
        },
        addTextAreaModel: (state: ElementModels, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
            const elements = current(state.elements);
            const index = elements.indexOf(action.payload) + 1;
            /*const textAreaModel: ElementModel = {
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
            state.elements.splice(index, 0, textAreaModel);*/
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
            saveElements(current(state.elements));
        }
    }
})

export const actions = elementsSlice.actions;
export default elementsSlice.reducer;