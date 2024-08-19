import { AuthService } from "@/entities/signupForm/api/api.auth";
import { saveToken } from "@/entities/signupForm/api/localStorage/saveToken";
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