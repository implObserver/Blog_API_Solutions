import { AuthService } from "@/entities/user/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
    'services/auth/signup',
    async (data: AuthData, thunkAPI) => {
        try {
            const username = data.username;
            const email = data.email;
            const password = data.password;
            const resp = await AuthService.signup(email, password, username);
            const user = resp.data.user;
            const res = {
                id:'signup',
                message: 'Пользователь успешно создан',
                error: false,
                data: {
                    name: 200,
                    message: user,
                },
            }
            return res;
        } catch (error) {
            console.log(error)
            const data = {
                id:'signup',
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