import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { login, signup, updateProfile } from "@/entities/user";
import { addPost, deletePost, updateTitle } from "@/entities/postState";

const statusesSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        addError: (state: Statuses, action: PayloadAction<ErrorType>) => {
            const errors = state.errors;
            errors.push(action.payload);
        },

        removeError: (state: Statuses, action: PayloadAction<ErrorType>) => {
            const errors = state.errors;
            const index = errors.findIndex(error => error.id === action.payload.id);
            errors.splice(index, 1);
        },
        removeAccess: (state: Statuses, action: PayloadAction<Access>) => {
            const accesses = state.accesses;
            const index = accesses.findIndex(access => access.id === action.payload.id);
            accesses.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        const setLoadingComplete = (state: Statuses, action: any) => {
            if (!action.payload.error) {
                deleteErrorsDuplicate(state, action);
                deleteAccessesDuplicate(state, action);
                const access: Access = {
                    id: action.payload.id,
                    message: action.payload.message,
                    status: 200,
                }
                state.accesses.push(access);
            } else {
                deleteErrorsDuplicate(state, action);
                deleteAccessesDuplicate(state, action);
                state.errors.push(action.payload.data);
            }
        };

        const deleteErrorsDuplicate = (state: Statuses, action: any) => {
            const errors = state.errors;
            const index = errors.findIndex(error => error.id === action.payload.id);
            errors.splice(index, 1);
        }

        const deleteAccessesDuplicate = (state: Statuses, action: any) => {
            const accesses = state.accesses;
            const index = accesses.findIndex(access => access.id === action.payload.id);
            accesses.splice(index, 1);
        }

        const setErrorState = (state: Statuses, action: any) => {
            if (action.payload.error) {
                deleteErrorsDuplicate(state, action);
                state.errors.push(action.payload.data);
            }
        };

        const asyncActions = [
            { action: login },
            { action: signup },
            { action: updateProfile },
            { action: addPost },
            { action: deletePost },
            { action: updateTitle },
        ];

        asyncActions.forEach(({ action }) => {
            builder
                .addCase(action.fulfilled, setLoadingComplete)
                .addCase(action.rejected, setErrorState);
        });
    }
})
export const statusesActions = statusesSlice.actions;
export const statusesReducer = statusesSlice.reducer;