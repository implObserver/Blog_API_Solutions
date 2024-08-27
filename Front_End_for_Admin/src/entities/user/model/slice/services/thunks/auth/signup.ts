import { AuthService } from "@/entities/user/api/api.auth";
import { saveUser } from "@/entities/user/api/localstorage/user/saveUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

export const signup = createAsyncThunk(
    'services/auth/signup',
    async (data: AuthData, thunkAPI) => {
        try {
            const username = data.username;
            const password = data.password;
            const resp = await AuthService.signup(username, password);
            const user = resp.data.user;
            Cookies.get("user_id")
            console.log(user)
            saveUser(user);
            return true;
        } catch (error) {
            return false;
        }
    }
)