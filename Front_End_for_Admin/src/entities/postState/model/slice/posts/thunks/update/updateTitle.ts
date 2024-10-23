import { PutService } from "@/entities/postState/api/services/api.put";
import { getAuthState } from "@/shared/lib";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateTitle = createAsyncThunk(
    'services/update/title/',
    async (data: UpdateTitle, thunkAPI) => {
        try {
            const isAuth = getAuthState();
            if (isAuth) {
                const resp = await PutService.updateTitle(data);
                const response = resp.data;
                const res = {
                    id: 'updateTitle',
                    message: `Название поста ${data.postid} успешно изменено`,
                    error: false,
                    data: {
                        name: 200,
                        message: response,
                    },
                }
                return res;
            }
        } catch (error) {
            console.log(error)
            const data = {
                id: 'updateTitle',
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