import { AuthService } from "@/entities/user/api/api.auth";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuth = createAsyncThunk(
    'services/auth/checkAuth',
    async (thunkAPI) => {
        try {
            const resp = await AuthService.refreshToken();
            return true;
        } catch (error) {
            return false;
        }
    }
)