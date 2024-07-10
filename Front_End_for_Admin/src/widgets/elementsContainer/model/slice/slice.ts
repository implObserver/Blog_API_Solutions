import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { saveElements } from "../../api/localStorage/saveElements";

const elementsSlice = createSlice({
    name: 'elements',
    initialState,
    reducers: {
        addElemnt: (state: Elements, action: PayloadAction<ElementContextType>) => {
            state.elements.push(action.payload);
        },
        removeElement: (state: Elements, action: PayloadAction<ElementContextType>) => {

        },
        saveToLocalStorage: (state: Elements) => {
            saveElements(state.elements);
        }
    }
})

export const actions = elementsSlice.actions;
export default elementsSlice.reducer;