import { ReadService } from "@/entities/user/api/api.get";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAvatar = createAsyncThunk(
    'services/get/avatar',
    async (thunkAPI) => {
        try {
            const resp = await ReadService.getAvatar();
            const data = resp.data;
            const imageUrl = URL.createObjectURL(data);
            return imageUrl;
        } catch (error) {
            return null;
        }
    }
)