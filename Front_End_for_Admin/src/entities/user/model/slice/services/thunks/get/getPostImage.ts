import { ReadService } from "@/entities/user/api/api.get";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostImage = createAsyncThunk(
    'services/get/image',
    async (imageUrl: string, thunkAPI) => {
        try {
            const resp = await ReadService.getPostImage(imageUrl);
            const blob = resp.data;
            const url = URL.createObjectURL(blob);
            return url;
        } catch (error) {
            return null;
        }
    }
)