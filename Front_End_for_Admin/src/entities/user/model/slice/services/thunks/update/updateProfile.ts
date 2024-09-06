import { PostService } from "@/entities/user/api/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk(
    'services/update/profile',
    async (profile: ProfileFormType, thunkAPI) => {
        try {
            const resp = await PostService.updateProfile(profile);
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)