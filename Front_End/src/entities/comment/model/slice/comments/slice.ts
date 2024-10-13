import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getPaginationComments } from "./thunks/get/getPaginationComments";
import { addComment } from "./thunks/post/addComment";
import { deleteComment } from "./thunks/delete/deleteComment";
import { putComment } from "./thunks/put/putComment";

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setCurrentPage: (state: Comments, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setTotalPages: (state: Comments, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        },
    },
    extraReducers: (builder) => {
        const handlePending = (state: Comments) => {
            state.isPending = true;
        };
        const handleFulfilled = (state: Comments) => {
            state.isPending = false;
        };
        const handleRejected = (state: Comments) => {
            state.isPending = false;
        };

        builder
            .addCase(getPaginationComments.pending, handlePending)
            .addCase(getPaginationComments.fulfilled, (state, action) => {
                handleFulfilled(state);
                console.log(action.payload)
                if (!action.payload.error) {
                    state.comments = action.payload.data.message.comments;
                    state.totalPages = action.payload.data.message.totalPages;
                    state.totalComments = action.payload.data.message.totalComments;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(getPaginationComments.rejected, handleRejected)

        builder
            .addCase(addComment.pending, handlePending)
            .addCase(addComment.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    console.log(action.payload.data)
                    state.totalComments = action.payload.data.message.totalComments;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(addComment.rejected, handleRejected)

        builder
            .addCase(deleteComment.pending, handlePending)
            .addCase(deleteComment.fulfilled, (state, action) => {
                handleFulfilled(state);
                if (!action.payload.error) {
                    console.log(action.payload.data)
                    state.totalComments = action.payload.data.message.totalComments;
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(deleteComment.rejected, handleRejected)

        builder
            .addCase(putComment.pending, handlePending)
            .addCase(putComment.fulfilled, (state, action) => {
                handleFulfilled(state);
                console.log(action.payload)
                if (!action.payload.error) {
                    const updatedComment = action.payload.data.message.updatedComment;
                    const index = state.comments.findIndex(comment => comment.id === updatedComment.id);
                    state.comments.splice(index, 1, updatedComment);
                    state.error = null;
                } else {
                    state.error = action.payload.data;
                }
            })
            .addCase(putComment.rejected, handleRejected)
    }
})

export const commentsActions = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;