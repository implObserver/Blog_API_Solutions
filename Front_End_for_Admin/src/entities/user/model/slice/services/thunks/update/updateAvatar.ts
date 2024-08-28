import { UpdateService } from "@/entities/user/api/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateAvatar = createAsyncThunk(
    'services/update/profile/avatar',
    async (avatar: File, thunkAPI) => {
        try {
            const resp = await UpdateService.updateAvatar(avatar);
            console.log(resp)
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)