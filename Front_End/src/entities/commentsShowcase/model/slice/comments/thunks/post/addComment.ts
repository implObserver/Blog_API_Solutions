
import { PostService } from "@/entities/commentsShowcase/api/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

export const addComment = createAsyncThunk(
    'services/add/comment/',
    async (data: PostComment, thunkAPI) => {
        try {
            const resp = await PostService.addComment(data);
            const totalComments = resp.data;
            const res = {
                error: false,
                data: {
                    name: 200,
                    message: totalComments,
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