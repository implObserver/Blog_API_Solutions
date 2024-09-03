import { AuthService } from "@/entities/user/api/api.auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
    'services/auth/logout',
    async (thunkAPI) => {
        const result = await AuthService.logout();
    }
)