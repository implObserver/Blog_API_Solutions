import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: (state: CounterState) => {
            state.count = 0;
        },
        increment: (state: CounterState) => {
            state.count++;
        }
    }
})

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;