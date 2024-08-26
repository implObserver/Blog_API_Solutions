import { UpdateService } from "@/entities/user/api/api.update";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateAvatar = createAsyncThunk(
    'services/update/profile/avatar',
    async (data: UpdateData, thunkAPI) => {
        try {
            console.log(data)
            const resp = await UpdateService.updateAvatar(data);
            console.log(resp)
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)