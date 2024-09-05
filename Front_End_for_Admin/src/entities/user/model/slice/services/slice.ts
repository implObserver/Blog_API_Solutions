import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { login } from "./thunks/auth/login";
import { checkAuth } from "./thunks/auth/checkAuth";
import { logout } from "./thunks/auth/logout";
import { signup } from "./thunks/auth/signup";
import { updateProfile } from "./thunks/update/updateProfile";
import { updateAvatar } from "./thunks/update/updateAvatar";
import { getAvatar } from "./thunks/get/getAvatar";
import { addPost } from "./thunks/update/addPost";
import { updatePost } from "./thunks/update/updatePost";
import { updateModelsOfPost } from "./thunks/update/updateModelsOfPost";
import { getPostImage } from "./thunks/get/getPostImage";

const userServicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        addModel: (state: ServicesDataType, action: PayloadAction<CellOfPost>) => {
            const index = action.payload.index;
            const post = state.user.posts[index];
            console.log(`payload: ${action.payload}`)
            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 1) {
                    elements.splice(index + 1, 0, action.payload.newModel);
                }
            })

        },
        updateModel: (state: ServicesDataType, action: PayloadAction<CellOfPost>) => {
            const index = action.payload.index;
            const post = state.user.posts[index];
            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    elements.splice(index, 1, action.payload.newModel);
                }
            })
        },
        removeModel: (state: ServicesDataType, action: PayloadAction<CellOfPost>) => {
            const index = action.payload.index;
            const post = state.user.posts[index];

            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    elements.splice(index, 1);
                }
            })
        },
        updateModels: (state: ServicesDataType, action: PayloadAction<UpdateModels>) => {
            const index = action.payload.index;
            const post = state.user.posts[index];
            post.elements = action.payload.models;
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
                state.user = action.payload;
                state.isAuth = true;
            })
            .addCase(login.rejected, handleRejected)

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
                state.user = action.payload;
                state.isAuth = true;
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
                state.user = action.payload;
            })
            .addCase(updateProfile.rejected, handleRejected)

        builder
            .addCase(updateAvatar.pending, handlePending)
            .addCase(updateAvatar.fulfilled, handleFulfilled)
            .addCase(updateAvatar.rejected, handleRejected)

        builder
            .addCase(getAvatar.pending, handlePending)
            .addCase(getAvatar.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.avatar = action.payload;

            })
            .addCase(getAvatar.rejected, handleRejected)

        builder
            .addCase(addPost.pending, handlePending)
            .addCase(addPost.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.user = action.payload;
            })
            .addCase(addPost.rejected, handleRejected)

        builder
            .addCase(updatePost.pending, handlePending)
            .addCase(updatePost.fulfilled, (state, action) => {
                handleFulfilled(state);
                console.log(action.payload)
                state.user = action.payload;
            })
            .addCase(updatePost.rejected, handleRejected)

        builder
            .addCase(updateModelsOfPost.pending, handlePending)
            .addCase(updateModelsOfPost.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.user = action.payload;
            })
            .addCase(updateModelsOfPost.rejected, handleRejected)

        builder
            .addCase(getPostImage.pending, handlePending)
            .addCase(getPostImage.fulfilled, (state, action) => {
                console.log(action.payload)
                handleFulfilled(state);
            })
            .addCase(getPostImage.rejected, handleRejected)

    }
})

export const servicesActions = userServicesSlice.actions;
export const servicesReducer = userServicesSlice.reducer;