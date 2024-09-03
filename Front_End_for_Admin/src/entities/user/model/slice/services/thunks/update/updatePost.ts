import { UpdateService } from "@/entities/user/api/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updatePost = createAsyncThunk(
    'services/update/post/',
    async (post: Post, thunkAPI) => {
        try {
            const resp = await UpdateService.updatePost(post);
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)