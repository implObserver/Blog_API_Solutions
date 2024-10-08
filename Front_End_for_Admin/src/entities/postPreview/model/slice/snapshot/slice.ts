import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

export const snapshotSlice = createSlice({
    name: 'post/models',
    initialState,
    reducers: {
        initialSnapshot: (state: SnapShot, action: PayloadAction<Post>) => {
            state.post_id = action.payload.id;
            state.elements = action.payload.elements;
        },
        updateSnapshot: (state: SnapShot, action: PayloadAction<ModelType<TextAreaModel | PreviewModel | TitleModel>[]>) => {
            state.elements = action.payload;
        },
    },
})

export const snapshotSliceActions = snapshotSlice.actions;
export const snapshotSliceReducer = snapshotSlice.reducer;