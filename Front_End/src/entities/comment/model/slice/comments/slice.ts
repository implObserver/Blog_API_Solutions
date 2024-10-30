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
        updateTotalComments: (state: Comments, action: PayloadAction<number>) => {
            state.totalComments = action.payload;
        },
        updateComment: (state: Comments, action: PayloadAction<PostComment>) => {
            const updatedComment = action.payload;
            const index = state.comments.findIndex(comment => comment.id === updatedComment.id);
            state.comments.splice(index, 1, updatedComment);
        },
    },
    extraReducers: (builder) => {
        const setLoading = (state: Comments) => {
            state.isLoading = true;
        };

        const setLoadingComplete = (state: Comments) => {
            state.isLoading = false;
        };

        const setErrorState = (state: Comments) => {
            state.isLoading = false;
        };

        const putCommentInState = (state: Comments, action: PayloadAction<any>) => {
            setLoadingComplete(state);
            if (!action.payload.error) {
                const updatedComment = action.payload.data.message.updatedComment;
                const index = state.comments.findIndex(comment => comment.id === updatedComment.id);
                state.comments.splice(index, 1, updatedComment);
            } else {
                state.error = action.payload.data;
            }
        }

        const getComments = (state: Comments, action: PayloadAction<any>) => {
            setLoadingComplete(state);
            if (!action.payload.error) {
                state.comments = action.payload.data.message.comments;
                state.totalPages = action.payload.data.message.totalPages;
                state.totalComments = action.payload.data.message.totalComments;
            } else {
                state.error = action.payload.data;
            }
        }

        const updateTotalComments = (state: Comments, action: PayloadAction<any>) => {
            setLoadingComplete(state);
            if (!action.payload.error) {
                state.totalComments = action.payload.data.message.totalComments;
            } else {
                state.error = action.payload.data;
            }
        }

        const asyncActions = [
            { action: getPaginationComments, handler: getComments },
            { action: addComment, handler: updateTotalComments },
            { action: deleteComment, handler: updateTotalComments },
            { action: putComment, handler: putCommentInState },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, setLoading)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, setErrorState);
        });
    }
})

export const commentsActions = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;