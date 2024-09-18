import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

export const snapshotSlice = createSlice({
    name: 'post/models',
    initialState,
    reducers: {
        initialSnapshot: (state:SnapShot, action:PayloadAction<Post>) => {
            state.snapshot = action.payload;
        },
        updateSnapshot: (state: SnapShot, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>[]>) => {
            const post = state.snapshot;
            post.elements = action.payload;
        },
    },
})

export const snapshotSliceActions = snapshotSlice.actions;
export const snapshotSliceReducer = snapshotSlice.reducer;