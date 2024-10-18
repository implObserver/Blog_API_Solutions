import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

export const snapshotSlice = createSlice({
    name: 'post/models',
    initialState,
    reducers: {
        initialSnapshot: (state: Snapshot, action: PayloadAction<Post>) => {
            state.postid = action.payload.id;
            state.models = action.payload.models;
        },
        updateSnapshot: (state: Snapshot, action: PayloadAction<Model<TextModel | PreviewModel | TitleModel>[]>) => {
            state.models = action.payload;
        },
    },
})

export const snapshotSliceActions = snapshotSlice.actions;
export const snapshotSliceReducer = snapshotSlice.reducer;