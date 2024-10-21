import { GetService } from "@/entities/user/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk(
    'services/get/profile',
    async (thunkAPI) => {
        try {
            const resp = await GetService.readProfile();
            const profile = resp.data.profile;
            return profile;
        } catch (error) {
            return false;
        }
    }
)