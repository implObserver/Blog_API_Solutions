import { PutService } from "@/entities/user/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk(
    'services/update/profile',
    async (profile: ProfileForm, thunkAPI) => {
        try {
            const resp = await PutService.updateProfile(profile);
            const user = resp.data.user;
            const res = {
                id:'updateProfile',
                message: 'Профиль успешно обновлен',
                error: false,
                data: {
                    name: 200,
                    message: user,
                },
            }
            return res;
        } catch (error) {
            const data = {
                id:'updateProfile',
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