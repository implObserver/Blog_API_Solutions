import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const backupsSlice = createSlice({
    name: 'backups',
    initialState,
    reducers: {
        addBackup: (state: PostBackups, action: PayloadAction<Post>) => {
            const backups = state.backups;
            const index = backups.findIndex(post => post.id === action.payload.id);
            index === -1
                ? backups.push(action.payload)
                : backups.splice(index, 1, action.payload);
        },
        removeBackup: (state: PostBackups, action: PayloadAction<Post>) => {
            const backups = state.backups;
            const index = backups.findIndex(post => post.id === action.payload.id);
            backups.splice(index, 1);
        },
    },
});

export const backupsActions = backupsSlice.actions;
export const backupsReducer = backupsSlice.reducer;