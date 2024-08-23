import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { login } from "./thunks/login";
import { checkAuth } from "./thunks/checkAuth";
import { logout } from "./thunks/logout";
import { signup } from "./thunks/signup";

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.states.isAuthInProgress = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                try {
                    state.states.isAuth = action.payload.valueOf();
                } catch (err) {
                    console.log("login error");
                } finally {
                    state.states.isAuthInProgress = false;
                }

            })

        builder
            .addCase(checkAuth.pending, (state) => {
                state.states.isAuthInProgress = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                try {
                    state.states.isAuth = action.payload.valueOf();
                } catch (err) {
                    console.log("auth error");
                } finally {
                    state.states.isAuthInProgress = false;
                }
            })

        builder
            .addCase(signup.pending, (state) => {
                state.states.isAuthInProgress = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                try {
                    state.states.isAuth = action.payload.valueOf();
                } catch (err) {
                    console.log("auth error");
                } finally {
                    state.states.isAuthInProgress = false;
                }

            })

        builder
            .addCase(logout.pending, (state) => {
                state.states.isAuthInProgress = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                try {
                    state.states.isAuth = false;
                    const defaultUser = {
                        id: 0,
                        name: 'visitor',
                        token: undefined,
                    }
                    state.user = defaultUser;
                } catch (err) {
                    console.log("logout error");
                } finally {
                    state.states.isAuthInProgress = false;
                }

            })
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;