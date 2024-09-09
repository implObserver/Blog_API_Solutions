import { createSlice, current, isAction, PayloadAction } from "@reduxjs/toolkit";
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
            console.log(state.count)
        }
    }
})

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;