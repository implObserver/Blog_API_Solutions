import { AuthService } from "@/entities/user/api/api.auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fastLogin = createAsyncThunk(
    'services/auth/fastlogin',
    async (thunkAPI) => {
        try {
            const resp = await AuthService.fastLogin();
            const user = resp.data.user;
            const res = {
                error: false,
                data: {
                    name: 200,
                    message: user,
                },
            }
            return res;
        } catch (error) {
            const data = {
                name: error.response.status,
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