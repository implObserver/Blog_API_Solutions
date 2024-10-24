import { AuthService } from "@/entities/user/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
    'services/auth/logout',
    async (thunkApi, { getState }) => {
        await AuthService.logout();
        localStorage.clear();
        indexedDB.deleteDatabase('blog_api_creater_idb');
    }
)