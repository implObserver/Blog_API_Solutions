import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { login } from "./thunks/auth/login";
import { checkAuth } from "./thunks/auth/checkAuth";
import { logout } from "./thunks/auth/logout";
import { signup } from "./thunks/auth/signup";
import { updateProfile } from "./thunks/update/updateProfile";
import { addPost } from "./thunks/update/addPost";
import { updatePost } from "./thunks/update/updatePost";

import { deletePost } from "./thunks/delete/deletePost";
import { fastLogin } from "./thunks/auth/fastLogin";
import { addComment } from "../../../../comment/model/slice/comments/thunks/post/addComment";

const userServicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        addModel: (state: ServicesDataType, action: PayloadAction<CellOfPost>) => {
            const post_id = action.payload.post_id;
            const post = state.user.posts.find(post => post.id === post_id);
            const models = post.models;
            const id = action.payload.model.id;
            models.forEach((element, index) => {
                if (element.id === id && index > 1) {
                    models.splice(index + 1, 0, action.payload.newModel);
                }
            })

        },
        updateModel: (state: ServicesDataType, action: PayloadAction<CellOfPost>) => {
            const post_id = action.payload.post_id;
            const post = state.user.posts.find(post => post.id === post_id);
            const models = post.models;
            const id = action.payload.model.id;
            models.forEach((element, index) => {
                if (element.id === id) {
                    models.splice(index, 1, action.payload.newModel);
                }
            })
        },
        removeModel: (state: ServicesDataType, action: PayloadAction<CellOfPost>) => {
            const post_id = action.payload.post_id;
            const post = state.user.posts.find(post => post.id === post_id);

            const models = post.models;
            const id = action.payload.model.id;
            models.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    models.splice(index, 1);
                }
            })
        },
        updateModels: (state: ServicesDataType, action: PayloadAction<UpdateModels>) => {
            const post_id = action.payload.post_id;
            const post = state.user.posts.find(post => post.id === post_id);
            post.models = action.payload.models;
        },
        clearErrors: (state: ServicesDataType) => {
            state.error = null;
        },
        update: (state: ServicesDataType) => {
            state.isUpdate = !state.isUpdate;
        },
        reset: (state: ServicesDataType) => {
            state.isAuth = false;
            state.user = null;
            state.avatar = null;
            state.isPending = false;
        },
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
            state.avatar = null;
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
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(updateProfile.rejected, handleRejected)

        builder
            .addCase(addPost.pending, handlePending)
            .addCase(addPost.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.user = action.payload.data.message;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(addPost.rejected, handleRejected)

        builder
            .addCase(deletePost.pending, handlePending)
            .addCase(deletePost.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    state.user = action.payload.data.message;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(deletePost.rejected, handleRejected)

        builder
            .addCase(updatePost.pending, (state) => {
                state.isPending = true;
                state.isUpdate = true;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (action.payload !== false) {
                    if (!action.payload.error) {
                        state.user = action.payload.data.message;
                        state.error = null;
                    } else {
                        state.error = action.payload.data;
                    }
                }
            })
            .addCase(updatePost.rejected, (state) => {
                state.isPending = false;
                state.isUpdate = false;
            })
    }
})

export const servicesActions = userServicesSlice.actions;
export const servicesReducer = userServicesSlice.reducer;