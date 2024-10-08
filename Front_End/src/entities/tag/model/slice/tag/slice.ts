import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        setTag: (state: Tag, action: PayloadAction<string>) => {
            state.tag = action.payload;
        },
    }
})

export const tagActions = tagSlice.actions;
export const tagReducer = tagSlice.reducer;