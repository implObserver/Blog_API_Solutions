import { AuthService } from "@/entities/user/api/api.auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
    'services/auth/signup',
    async (data: AuthData, thunkAPI) => {
        try {
            const username = data.username;
            const password = data.password;
            const resp = await AuthService.signup(username, password);
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)