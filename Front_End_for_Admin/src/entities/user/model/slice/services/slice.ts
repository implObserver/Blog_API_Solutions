import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { login } from "./thunks/auth/login";
import { checkAuth } from "./thunks/auth/checkAuth";
import { logout } from "./thunks/auth/logout";
import { signup } from "./thunks/auth/signup";
import { updateProfile } from "./thunks/update/updateProfile";
import { updateAvatar } from "./thunks/update/updateAvatar";

const userServicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isPending = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                try {
                    state.user = action.payload;
                    state.isAuth = true;
                } catch (err) {
                    state.isAuth = false;
                    console.log("login error");
                } finally {
                    state.isPending = false;
                }

            })

        builder
            .addCase(checkAuth.pending, (state) => {
                state.isPending = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                try {
                    state.isAuth = true;
                } catch (err) {
                    state.isAuth = false;
                    console.log("auth error");
                } finally {
                    state.isPending = false;
                }
            })

        builder
            .addCase(signup.pending, (state) => {
                state.isPending = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                try {
                    state.user = action.payload;
                    state.isAuth = true;
                } catch (err) {
                    state.isAuth = false;
                    console.log("auth error");
                } finally {
                    state.isPending = false;
                }

            })

        builder
            .addCase(logout.pending, (state) => {
                state.isPending = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                try {
                    state.isAuth = false;
                    state.user = null;
                } catch (err) {
                    console.log("logout error");
                } finally {
                    state.isPending = false;
                }

            })

        builder
            .addCase(updateProfile.pending, (state) => {
                state.isPending = true;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                try {
                    state.user = action.payload;
                } catch (err) {
                    console.log("update error");
                } finally {
                    state.isPending = false;
                }

            })

        builder
            .addCase(updateAvatar.pending, (state) => {
                state.isPending = true;
            })
            .addCase(updateAvatar.fulfilled, (state, action) => {
                try {
                    state.user = action.payload;
                } catch (err) {
                    console.log("update avatar error");
                } finally {
                    state.isPending = false;
                }

            })
    }
})

export const servicesActions = userServicesSlice.actions;
export const servicesReducer = userServicesSlice.reducer;