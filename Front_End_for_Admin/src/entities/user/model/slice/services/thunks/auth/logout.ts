import { AuthService } from "@/entities/user/api/api.auth";
import { removeToken } from "@/entities/user/api/localstorage/token/removeToken";
import { removeUser } from "@/entities/user/api/localstorage/user/removeUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
    'services/auth/logout',
    async (thunkAPI) => {
        console.log('agaga')
        //const result = await AuthService.logout();
        removeUser();
        removeToken();
    }
)