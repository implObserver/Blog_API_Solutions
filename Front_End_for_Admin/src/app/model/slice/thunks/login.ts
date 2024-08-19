import { AuthService } from "@/entities/signupForm/api/api.auth";
import { saveToken } from "@/entities/signupForm/api/localStorage/saveToken";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'auth/login',
    async (data: AuthData, thunkAPI) => {
        try {
            const username = data.username;
            const password = data.password;
            const resp = await AuthService.login(username, password);
            console.log(resp);
            saveToken(resp.data.accessToken);
            return true;
        } catch (error) {
            return false;
        }
    }
)