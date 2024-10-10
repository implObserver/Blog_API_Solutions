import { PostService } from "@/entities/user/api/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

export const addComment = createAsyncThunk(
    'services/add/comment/',
    async (data: PostComment, thunkAPI) => {
        try {
            const resp = await PostService.addComment(data);
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