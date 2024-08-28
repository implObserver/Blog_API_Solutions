import { AuthService } from "@/entities/user/api/api.auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'services/auth/login',
    async (data: AuthData, thunkAPI) => {
        try {
            const username = data.username;
            const password = data.password;
            const resp = await AuthService.login(username, password);
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)