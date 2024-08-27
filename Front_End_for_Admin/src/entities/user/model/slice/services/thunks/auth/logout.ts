import { AuthService } from "@/entities/user/api/api.auth";
import { removeUser } from "@/entities/user/api/localstorage/user/removeUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
    'services/auth/logout',
    async (thunkAPI) => {
        console.log('agaga')
        const result = await AuthService.logout();
        console.log(result)
    }
)