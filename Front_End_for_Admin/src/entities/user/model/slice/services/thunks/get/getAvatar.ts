import { ReadService } from "@/entities/user/api/api.get";
import { fileToBase64 } from "@/shared/lib";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAvatar = createAsyncThunk(
    'services/get/avatar',
    async (thunkAPI) => {
        try {
            const resp = await ReadService.getAvatar();
            const contentType = resp.headers['content-type']
            const data = resp.data;
            const file = new File([data], 'avatar', { type: contentType });
            const base64 = await fileToBase64(file);
            return base64;
        } catch (error) {
            return null;
        }
    }
)