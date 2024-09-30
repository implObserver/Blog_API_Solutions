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
                return user;
            }
            return false;
        } catch (error) {
            return false;
        }
    }
)