import { AuthService } from "@/entities/signupForm/api/api.auth";
import { saveToken } from "@/entities/signupForm/api/localStorage/saveToken";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
    'auth/signup',
    async (data: AuthData, thunkAPI) => {
        try {
            const username = data.username;
            const password = data.password;
            const resp = await AuthService.signup(username, password);
            console.log(resp)
            saveToken(resp.data.accessToken);
            return true;
        } catch (error) {
            return false;
        }
    }
)