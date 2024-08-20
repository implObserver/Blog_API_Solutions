import { createSlice, current, isAction, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { saveModels } from "../../../api/localStorage/saveModels";
import { elementsToModels } from "../../../lib/helper/ElementsToModels";
import { saveFocus } from "@/entities/element/api/localStorage/saveFocus";

const focusSlice = createSlice({
    name: 'focus',
    initialState,
    reducers: {
        setFocus: (state: Focus, action: PayloadAction<Number>) => {
            state.index = action.payload;
            saveFocus(state.index);
        },
    }
})

export const focusActions = focusSlice.actions;
export const focusReducer = focusSlice.reducer;