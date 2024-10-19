import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const focusSlice = createSlice({
    name: 'focus',
    initialState,
    reducers: {
        setFocus: (state: FocusContext, action: PayloadAction<Number>) => {
            state.index = action.payload;
        },
    }
})

export const focusActions = focusSlice.actions;
export const focusReducer = focusSlice.reducer;