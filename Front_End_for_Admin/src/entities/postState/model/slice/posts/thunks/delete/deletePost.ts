import { DeleteService } from "@/entities/postState/api/services/api.delete";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deletePost = createAsyncThunk(
    'services/delete/post/',
    async (postId: number, thunkAPI) => {
        try {
            const resp = await DeleteService.deletePost(postId);
            const response = resp.data;
            const res = {
                id:'deletePost',
                message: `Пост ${postId} успешно удален`,
                error: false,
                data: {
                    name: 200,
                    message: response,
                },
            }
            return res;
        } catch (error) {
            const data = {
                id:'deletePost',
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