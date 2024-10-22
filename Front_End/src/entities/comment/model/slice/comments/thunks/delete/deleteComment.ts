
import { DeleteService } from "@/entities/comment/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

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