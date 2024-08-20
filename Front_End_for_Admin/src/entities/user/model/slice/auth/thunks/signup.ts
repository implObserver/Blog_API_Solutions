import { AuthService } from "@/entities/user/api/api.auth";
import { saveToken } from "@/entities/user/api/localstorage/token/saveToken";
import { saveUser } from "@/entities/user/api/localstorage/user/saveUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
    'auth/signup',
    async (data: AuthData, thunkAPI) => {
        try {
            const username = data.username;
            const password = data.password;
            const resp = await AuthService.signup(username, password);
            const user = resp.data.user;
            saveUser(user);
            return true;
        } catch (error) {
            return false;
        }
    }
)