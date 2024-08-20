import { AuthService } from "@/entities/user/api/api.auth";
import { removeToken } from "@/entities/user/api/localstorage/token/removeToken";
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