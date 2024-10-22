import { AuthService } from "@/entities/user/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'services/auth/login',
    async (data: LoginData, thunkAPI) => {
        try {
            const identifier = data.identifier;
            const password = data.password;
            const resp = await AuthService.login(identifier, password);
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