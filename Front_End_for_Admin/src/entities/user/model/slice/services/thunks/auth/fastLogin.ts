import { AuthService } from "@/entities/user/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fastLogin = createAsyncThunk(
    'services/auth/fastlogin',
    async (thunkAPI) => {
        try {
            const resp = await AuthService.fastLogin();
            const user = resp.data.user;
            const res = {
                id:'fastLogin',
                message: 'Авторизован',
                error: false,
                data: {
                    status: 200,
                    message: user,
                },
            }
            return res;
        } catch (error) {
            const data = {
                id:'fastLogin',
                status: error.response.status,
                message: error.response.data.error,
            }
            const res = {
                error: true,
                data,
            }
            return res;
        }
    }
)