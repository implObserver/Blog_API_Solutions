import { store } from "@/app/model/store/Store";
import { UpdateService } from "@/entities/postState/api/api.update";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateTag = createAsyncThunk(
    'services/update/tag/',
    async (data: Tag, thunkAPI) => {
        try {
            const isAuth = store.getState().userServices.isAuthenticated;
            if (isAuth) {
                const resp = await UpdateService.updateTag(data.postid, data.tagName);
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