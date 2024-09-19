import { UpdateService } from "@/entities/user/api/api.put";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk(
    'services/update/profile',
    async (profile: ProfileFormType, thunkAPI) => {
        try {
            const resp = await UpdateService.updateProfile(profile);
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)