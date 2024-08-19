import { AuthService } from "@/entities/signupForm/api/api.auth";
import { removeToken } from "@/entities/signupForm/api/localStorage/removeToken";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
    'auth/logout',
    async (thunkAPI) => {
        console.log('agaga')
        const result = await AuthService.logout();
        removeToken();
        return result
    }
)