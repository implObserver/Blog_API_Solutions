import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
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
                state.isAuthInProgress = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                try {
                    state.isAuth = action.payload.valueOf();
                } catch (err) {
                    console.log("login error");
                } finally {
                    state.isAuthInProgress = false;
                }

            })

        builder
            .addCase(checkAuth.pending, (state) => {
                state.isAuthInProgress = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                try {
                    state.isAuth = action.payload.valueOf();
                } catch (err) {
                    console.log("auth error");
                } finally {
                    state.isAuthInProgress = false;
                }
            })

        builder
            .addCase(signup.pending, (state) => {
                state.isAuthInProgress = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                try {
                    state.isAuth = action.payload.valueOf();
                } catch (err) {
                    console.log("auth error");
                } finally {
                    state.isAuthInProgress = false;
                }

            })

        builder.addCase(logout.fulfilled, (state, action) => {
            console.log(state.isAuth)
        })
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;