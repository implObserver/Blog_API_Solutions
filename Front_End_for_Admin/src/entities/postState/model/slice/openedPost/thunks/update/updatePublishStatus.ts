import { store } from "@/app/model/store/Store";
import { UpdateService } from "@/entities/postState/api/api.update";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updatePublishStatus = createAsyncThunk(
    'services/update/publish_status/',
    async (data: UpdatePublishStatus, thunkAPI) => {
        try {
            const isAuth = store.getState().userServices.isAuthenticated;
            if (isAuth) {
                const resp = await UpdateService.updatePublishStatusOfPost(data);
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