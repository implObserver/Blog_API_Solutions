import { UpdateService } from "@/entities/user/api/api.put";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addImageOfPost = createAsyncThunk(
    'services/add/post/image',
    async (avatar: File, thunkAPI) => {
        try {
            const resp = await UpdateService.updateAvatar(avatar);
            const user = resp.data.user;
            const res = {
                error: false,
                data: {
                    name: 200,
                    message: user,
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