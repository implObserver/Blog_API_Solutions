import { UpdateService } from "@/entities/user/api/api.put";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addImageOfPost = createAsyncThunk(
    'services/add/post/image',
    async (avatar: File, thunkAPI) => {
        try {
            const resp = await UpdateService.updateAvatar(avatar);
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)