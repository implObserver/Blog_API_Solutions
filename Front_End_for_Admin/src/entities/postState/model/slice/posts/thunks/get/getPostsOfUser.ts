import { ReadService } from "@/entities/postState/api/api.get";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsOfUser = createAsyncThunk(
    'services/get/usersPosts',
    async (data: PaginationData, thunkAPI) => {
        try {
            const resp = await ReadService.getPostsOfuser(data);
            const posts = resp.data
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