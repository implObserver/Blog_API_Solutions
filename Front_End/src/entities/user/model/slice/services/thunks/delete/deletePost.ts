import { DeleteService } from "@/entities/user/api/api.delete";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deletePost = createAsyncThunk(
    'services/delete/post/',
    async (postId: number, thunkAPI) => {
        try {
            const resp = await DeleteService.deletePost(postId);
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)