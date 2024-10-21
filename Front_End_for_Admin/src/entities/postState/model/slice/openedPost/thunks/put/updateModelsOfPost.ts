import { PutService } from "@/entities/postState/api";
import { getAuthState } from "@/shared/lib";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateModelsOfPost = createAsyncThunk(
    'services/update/post/models',
    async (snapshot: Snapshot, thunkAPI) => {
        try {
            const isAuth = getAuthState();
            if (isAuth) {
                const resp = await PutService.updateModels(snapshot);
                const response = resp.data;
                const res = {
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