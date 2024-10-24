import { AuthService } from "@/entities/user/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
const blogUrl = import.meta.env.VITE_BLOG_URL;
export const logout = createAsyncThunk(
    'services/auth/logout',
    async (thunkApi, { getState }) => {
        localStorage.clear();
        indexedDB.deleteDatabase('blog_api_creater_idb');
        AuthService.logout();
        window.location.href = blogUrl;
    }
)