import { ReadService } from "@/entities/user/api/api.get";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsOfUser = createAsyncThunk(
    'services/get/usersPosts',
    async (thunkAPI) => {
        try {
            const resp = await ReadService.readPostsOfuser();
            const posts = resp.data.posts;
            return posts;
        } catch (error) {
            return false;
        }
    }
)