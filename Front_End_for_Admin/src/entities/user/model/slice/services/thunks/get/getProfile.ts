import { ReadService } from "@/entities/user/api/api.get";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk(
    'services/get/profile',
    async (user: User, thunkAPI) => {
        try {
            const resp = await ReadService.readProfile(user);
            const profile = resp.data.profile;
            return profile;
        } catch (error) {
            return false;
        }
    }
)