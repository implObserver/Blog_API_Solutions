import { ReadService } from "@/entities/postState/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostToId = createAsyncThunk(
    'services/get/post',
    async (postid: number, thunkAPI) => {
        try {
            const resp = await ReadService.getPostToId(postid);
            const post = resp.data;
            const res = {
                error: false,
                data: {
                    name: 200,
                    message: post,
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