import { UpdateService } from "@/entities/user/api/api.update";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk(
    'services/update/profile',
    async (data: UpdateData, thunkAPI) => {
        try {
            console.log(data)
            const resp = await UpdateService.updateProfile(data);
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)