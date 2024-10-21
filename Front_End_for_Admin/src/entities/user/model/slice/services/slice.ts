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
        clearErrors: (state: ServiceStatus) => {
            state.error = null;
        },
        reset: (state: ServiceStatus) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isLoading = false;
        },
        update: (state: ServiceStatus) => {
            state.isUpdating = !state.isUpdating;
        }
    },
    extraReducers: (builder) => {
        const setLoading = (state: ServiceStatus) => {
            state.isLoading = true;
        };
        const setAuthenticated = (state: ServiceStatus) => {
            setLoadingComplete(state);
            state.isAuthenticated = true;
        }
        const setLoadingComplete = (state: ServiceStatus) => {
            state.isLoading = false;
        };

        const handleUserUpdate = (state: ServiceStatus, action: any) => {
            state.isLoading = false;
            if (!action.payload.error) {
                state.user = action.payload.data.message;
                state.isAuthenticated = true;
            } else {
                state.error = action.payload.data;
            }
        };

        const setErrorState = (state: ServiceStatus) => {
            console.log(state.error)
            state.isLoading = false;
        };
        const handleLogout = (state: ServiceStatus) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isLoading = false;
        }

        const asyncActions = [
            { action: login, handler: handleUserUpdate },
            { action: fastLogin, handler: handleUserUpdate },
            { action: checkAuth, handler: setAuthenticated },
            { action: signup, handler: handleUserUpdate },
            { action: logout, handler: handleLogout },
            { action: updateProfile, handler: handleUserUpdate },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, setLoading)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, setErrorState);
        });
    }
})

export const servicesActions = userServicesSlice.actions;
export const servicesReducer = userServicesSlice.reducer;