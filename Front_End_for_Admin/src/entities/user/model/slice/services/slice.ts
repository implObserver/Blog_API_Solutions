import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { login } from "./thunks/auth/login";
import { checkAuth } from "./thunks/auth/checkAuth";
import { logout } from "./thunks/auth/logout";
import { signup } from "./thunks/auth/signup";
import { updateProfile } from "./thunks/update/updateProfile";
import { addPost } from "./thunks/update/addPost";
import { updateModelsOfPost } from "../../../../postState/model/slice/posts/thunks/update/updateModelsOfPost";
import { fastLogin } from "./thunks/auth/fastLogin";
import { updateTag } from "./thunks/update/updateTag";
import { updatePublishStatus } from "./thunks/update/updatePublishStatus";

const userServicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        updatePublishStatus: (state: ServicesDataType, action: PayloadAction<UpdatePublishStatus>) => {
            const post_id = action.payload.post_id;
            const post = state.user.posts.find(post => post.id === post_id);
            post.isPublished = action.payload.status;
            console.log(current(state.user.posts))
        },
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
            .addCase(login.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.user = action.payload.data.message;
                    state.isAuth = true;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(login.rejected, handleRejected)

        builder
            .addCase(fastLogin.pending, handlePending)
            .addCase(fastLogin.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.user = action.payload.data.message;
                    state.isAuth = true;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
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
            .addCase(signup.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.user = action.payload.data.message;
                    state.isAuth = true;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(signup.rejected, handleRejected)

        builder
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, handleFulfilledLogout)
            .addCase(logout.rejected, handleRejected)

        builder
            .addCase(updateProfile.pending, handlePending)
            .addCase(updateProfile.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.user = action.payload.data.message;
                    state.isAuth = true;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(updateProfile.rejected, handleRejected)
        builder
            .addCase(updateTag.pending, handlePending)
            .addCase(updateTag.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.user = action.payload.data.message;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(updateTag.rejected, handleRejected)

        builder
            .addCase(updatePublishStatus.pending, handlePending)
            .addCase(updatePublishStatus.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.user = action.payload.data.message;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(updatePublishStatus.rejected, handleRejected)
    }
})

export const servicesActions = userServicesSlice.actions;
export const servicesReducer = userServicesSlice.reducer;