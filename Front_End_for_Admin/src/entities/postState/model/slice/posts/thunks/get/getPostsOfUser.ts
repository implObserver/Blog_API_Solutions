import { GetService } from "@/entities/postState/api/services/api.get";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsOfUser = createAsyncThunk(
    'services/get/usersPosts',
    async (data: PaginationData, thunkAPI) => {
        try {
            const resp = await GetService.getPostsOfuser(data);
            const posts = resp.data
            const res = {
                id:'getPost',
                message: `Посты успешно загружены`,
                error: false,
                data: {
                    name: 200,
                    message: posts,
                },
            }
            return res;
        } catch (error) {
            const data = {
                id:'getPost',
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