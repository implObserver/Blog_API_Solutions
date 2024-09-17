import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const scrollRestorationSlice = createSlice({
    name: 'scrolls',
    initialState,
    reducers: {
        setScroll: (state: Scrolls, action: PayloadAction<Scroll>) => {
            const scrolls = state.scrolls;
            const index = scrolls.findIndex((scroll) => scroll.pathname === action.payload.pathname);
            index >= 0
                ? scrolls.splice(index, 1, action.payload)
                : scrolls.push(action.payload);
        },
        removeScroll: (state: Scrolls, action: PayloadAction<Scroll>) => {
            const scrolls = state.scrolls;
            const index = scrolls.findIndex((scroll) => scroll.pathname === action.payload.pathname);
            scrolls.splice(index, 1);
        },
    }
})

export const scrollRestorationActions = scrollRestorationSlice.actions;
export const scrollRestorationReducer = scrollRestorationSlice.reducer;