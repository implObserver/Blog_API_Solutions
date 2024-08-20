import { AuthService } from "@/entities/user/api/api.auth";
import { saveToken } from "@/entities/user/api/localstorage/token/saveToken";
import { loadUser } from "@/entities/user/api/localstorage/user/loadUser";
import { saveUser } from "@/entities/user/api/localstorage/user/saveUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'auth/login',
    async (data: AuthData, thunkAPI) => {
        try {
            const username = data.username;
            const password = data.password;
            const resp = await AuthService.login(username, password);
            console.log(resp);
            const user = resp.data.user;
            saveUser(user);
            const usertest = loadUser();
            console.log(usertest);
            return true;
        } catch (error) {
            return false;
        }
    }
)