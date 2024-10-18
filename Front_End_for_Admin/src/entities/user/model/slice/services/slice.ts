import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { login } from "./thunks/auth/login";
import { checkAuth } from "./thunks/auth/checkAuth";
import { logout } from "./thunks/auth/logout";
import { signup } from "./thunks/auth/signup";
import { updateProfile } from "./thunks/update/updateProfile";
import { fastLogin } from "./thunks/auth/fastLogin";

const userServicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        clearErrors: (state: ServicesDataType) => {
            state.error = null;
        },
        reset: (state: ServicesDataType) => {
            state.isAuth = false;
            state.user = null;
            state.isPending = false;
        },
        update: (state: ServicesDataType) => {
            state.isUpdate = !state.isUpdate;
        }
    },
    extraReducers: (builder) => {
        const handlePending = (state: ServicesDataType) => {
            state.isPending = true;
        };
        const handleFulfilled = (state: ServicesDataType) => {
            state.isPending = false;
        };

        const handleFulfilledWithUserUpdate = (state: ServicesDataType, action: any) => {
            state.isPending = false;
            if (!action.payload.error) {
                state.user = action.payload.data.message;
                state.isAuth = true;
                state.error = null;
            } else {
                state.error = action.payload.data;
            }
        };

        const handleRejected = (state: ServicesDataType) => {
            state.isPending = false;
        };
        const handleFulfilledLogout = (state: ServicesDataType) => {
            state.isAuth = false;
            state.user = null;
            state.isPending = false;
        }
        builder
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, handleFulfilledWithUserUpdate)
            .addCase(login.rejected, handleRejected)

        builder
            .addCase(fastLogin.pending, handlePending)
            .addCase(fastLogin.fulfilled, handleFulfilledWithUserUpdate)
            .addCase(fastLogin.rejected, handleRejected)

        builder
            .addCase(checkAuth.pending, handlePending)
            .addCase(checkAuth.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.isAuth = true;
            })
            .addCase(checkAuth.rejected, handleRejected)

        builder
            .addCase(signup.pending, handlePending)
            .addCase(signup.fulfilled, handleFulfilledWithUserUpdate)
            .addCase(signup.rejected, handleRejected)

        builder
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, handleFulfilledLogout)
            .addCase(logout.rejected, handleRejected)

        builder
            .addCase(updateProfile.pending, handlePending)
            .addCase(updateProfile.fulfilled, handleFulfilledWithUserUpdate)
            .addCase(updateProfile.rejected, handleRejected)
    }
})

export const servicesActions = userServicesSlice.actions;
export const servicesReducer = userServicesSlice.reducer;