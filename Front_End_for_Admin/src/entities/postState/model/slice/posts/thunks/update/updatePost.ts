import { PutService } from "@/entities/postState/api/services/api.put";
import { getAuthState } from "@/shared/lib";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updatePost = createAsyncThunk(
    'services/update/post/',
    async (post: Post, thunkAPI) => {
        try {
            const isAuth = getAuthState();
            if (isAuth) {
                const resp = await PutService.updatePost(post);
                const response = resp.data;
                const res = {
                    id: 'updatePost',
                    message: `Пост ${post.id} успешно обновлен`,
                    error: false,
                    data: {
                        name: 200,
                        message: response,
                    },
                }
                return res;
            }
        } catch (error) {
            console.log(error)
            const data = {
                id: 'updatePost',
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