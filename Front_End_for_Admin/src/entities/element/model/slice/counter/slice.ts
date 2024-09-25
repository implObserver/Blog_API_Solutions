import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: (state: Counter) => {
            state.count = 0;
        },
        increment: (state: Counter) => {
            state.count++;
        }
    }
})

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;