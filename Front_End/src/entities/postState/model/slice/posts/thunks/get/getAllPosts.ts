import { ReadService } from "@/entities/postState/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPosts = createAsyncThunk(
    'services/get/allPosts',
    async (thunkAPI) => {
        try {
            const resp = await ReadService.getPosts();
            const posts = resp.data.posts_list;
            const res = {
                error: false,
                data: {
                    name: 200,
                    message: posts,
                },
            }
            return res;
        } catch (error) {
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