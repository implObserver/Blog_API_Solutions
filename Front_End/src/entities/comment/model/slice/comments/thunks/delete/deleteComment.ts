
import { DeleteService } from "@/entities/comment/api/api.delete";
import { PostService } from "@/entities/comment/api/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

export const deleteComment = createAsyncThunk(
    'services/delete/comment/',
    async (data: PostComment, thunkAPI) => {
        try {
            const resp = await DeleteService.deleteComment(data);
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