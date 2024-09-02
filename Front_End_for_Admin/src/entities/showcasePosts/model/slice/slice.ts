import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addModel: (state: Posts, action: PayloadAction<CellOfPost>) => {
            const index = action.payload.index;
            const post = state.posts[index];
            console.log(post)
            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 1) {
                    elements.splice(index + 1, 0, action.payload.newModel);
                }
            })

            console.log(current(state.posts))
        },
        updateModel: (state: Posts, action: PayloadAction<CellOfPost>) => {
            const index = action.payload.index;
            const post = state.posts[index];

            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id) {
                    elements.splice(index, 1, action.payload.newModel);
                }
            })
        },
        removeModel: (state: Posts, action: PayloadAction<CellOfPost>) => {
            const index = action.payload.index;
            const post = state.posts[index];

            const elements = post.elements;
            const id = action.payload.model.id;
            elements.forEach((element, index) => {
                if (element.id === id && index > 2) {
                    elements.splice(index, 1);
                }
            })
        },
        uploadPosts: (state: Posts, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        }
    }
})

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;