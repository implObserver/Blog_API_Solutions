import { PostService } from "@/entities/user/api/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateModelsOfPost = createAsyncThunk(
    'services/update/post/models',
    async (data: PostUpdate, thunkAPI) => {
        try {
            const resp = await PostService.updateModelsOfPost(data);
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)