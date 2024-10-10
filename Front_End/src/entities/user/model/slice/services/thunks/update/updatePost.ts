import { store } from "@/app/model/store/Store";
import { UpdateService } from "@/entities/user/api/api.put";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updatePost = createAsyncThunk(
    'services/update/post/',
    async (post: Post, thunkAPI) => {
        try {
            const isAuth = store.getState().userServices.isAuth;
            if (isAuth) {
                const resp = await UpdateService.updatePost(post);
                const user = resp.data.user;
                const res = {
                    error: false,
                    data: {
                        name: 200,
                        message: user,
                    },
                }
                return res;
            }
            return false;
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