import { PostService } from "@/entities/postState/api/services/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addPost = createAsyncThunk(
    'services/add/post/',
    async (dataPost: PostForm, thunkAPI) => {
        try {
            const resp = await PostService.addPost(dataPost);
            const response = resp.data;
            const res = {
                id: 'addPost',
                message: `Пост ${dataPost.title} успешно добавлен`,
                error: false,
                data: {
                    name: 200,
                    message: response,
                },
            }
            return res;
        } catch (error) {
            console.log(error)
            const data = {
                id: 'addPost',
                status: error.response.status,
                message: error.response.data.error,
            }
            const res = {
                error: true,
                data,
            }
            return res;
        }
    }
)