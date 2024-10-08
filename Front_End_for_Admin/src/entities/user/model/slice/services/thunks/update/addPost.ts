import { PostService } from "@/entities/user/api/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addPost = createAsyncThunk(
    'services/add/post/',
    async (dataPost: PostFormType, thunkAPI) => {
        try {
            const resp = await PostService.addPost(dataPost);
            const user = resp.data.user;
            const res = {
                error: false,
                data: {
                    name: 200,
                    message: user,
                },
            }
            return res;
        } catch (error) {
            console.log(error)
            const data = {
                name: error.response.status,
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