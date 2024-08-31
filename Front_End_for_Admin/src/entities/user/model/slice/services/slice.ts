import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { login } from "./thunks/auth/login";
import { checkAuth } from "./thunks/auth/checkAuth";
import { logout } from "./thunks/auth/logout";
import { signup } from "./thunks/auth/signup";
import { updateProfile } from "./thunks/update/updateProfile";
import { updateAvatar } from "./thunks/update/updateAvatar";
import { getAvatar } from "./thunks/get/getAvatar";
import { addPost } from "./thunks/update/addPost";

const userServicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        const handlePending = (state: ServicesDataType) => {
            state.isPending = true;
        };
        const handleFulfilled = (state, action) => {
            state.isPending = false;
            return action.payload;
        };
        const handleRejected = (state: ServicesDataType) => {
            state.isPending = false;
        };
        builder
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuth = true;
                state.isPending = false;
            })
            .addCase(login.rejected, handleRejected)

        builder
            .addCase(checkAuth.pending, handlePending)
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isAuth = true;
                state.isPending = false;
            })
            .addCase(checkAuth.rejected, handleRejected)

        builder
            .addCase(signup.pending, handlePending)
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuth = true;
                state.isPending = false;
            })
            .addCase(signup.rejected, handleRejected)

        builder
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, (state, action) => {
                state.isAuth = false;
                state.user = null;
                state.avatar = null;
                state.isPending = false;
            })
            .addCase(logout.rejected, handleRejected)

        builder
            .addCase(updateProfile.pending, handlePending)
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isPending = false;
            })
            .addCase(updateProfile.rejected, handleRejected)

        builder
            .addCase(updateAvatar.pending, handlePending)
            .addCase(updateAvatar.fulfilled, (state, action) => {
                state.isPending = false;
            })
            .addCase(updateAvatar.rejected, handleRejected)

        builder
            .addCase(getAvatar.pending, handlePending)
            .addCase(getAvatar.fulfilled, (state, action) => {
                state.isPending = false;
                state.avatar = action.payload;

            })
            .addCase(getAvatar.rejected, handleRejected)

        builder
            .addCase(addPost.pending, handlePending)
            .addCase(addPost.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isPending = false;
            })
            .addCase(addPost.rejected, handleRejected)
    }
})

export const servicesActions = userServicesSlice.actions;
export const servicesReducer = userServicesSlice.reducer;