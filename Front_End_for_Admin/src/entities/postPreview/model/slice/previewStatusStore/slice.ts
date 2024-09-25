import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

export const previewStatusesSlice = createSlice({
    name: 'post/previews',
    initialState,
    reducers: {
        initialStatus: (state: PreviewStatuses, action: PayloadAction<PreviewStatus>) => {
            const newStatus = action.payload;
            const index = state.statuses.findIndex(status => status.code === newStatus.code);
            if (index === -1) {
                state.statuses.push(newStatus);
            } else {
                state.statuses.splice(index, 0, newStatus);
            }
        },
    },
})

export const previewStatusesSliceActions = previewStatusesSlice.actions;
export const previewStatusesSliceReducer = previewStatusesSlice.reducer;