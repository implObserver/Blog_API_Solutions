import { UpdateService } from "@/entities/user/api/api.put";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk(
    'services/update/profile',
    async (profile: ProfileFormType, thunkAPI) => {
        try {
            const resp = await UpdateService.updateProfile(profile);
            const user = resp.data.user;
            const res = {
                error: false,
                msg: user,
            }
            return res;
        } catch (error) {
            console.log(error)
            const res = {
                error: true,
                msg: error.response.data.error,
            }
            return res;
        }
    }
)