import { AuthService } from "@/entities/user/api/api.auth";
import { saveToken } from "@/entities/user/api/localstorage/token/saveToken";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (thunkAPI) => {
        try {
            const resp = await AuthService.refreshToken();
            saveToken(resp.data.accessToken);
            return true;
        } catch (error) {
            return false;
        }
    }
)