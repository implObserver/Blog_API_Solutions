import { ReadService } from "@/entities/user/api/api.read";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsOfUser = createAsyncThunk(
    'services/get/usersPosts',
    async (user: User, thunkAPI) => {
        try {
            const resp = await ReadService.readPostsOfuser(user);
            const posts = resp.data.posts;
            return posts;
        } catch (error) {
            return false;
        }
    }
)