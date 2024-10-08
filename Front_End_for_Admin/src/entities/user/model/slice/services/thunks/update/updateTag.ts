import { store } from "@/app/model/store/Store";
import { UpdateService } from "@/entities/user/api/api.put";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateTag = createAsyncThunk(
    'services/update/tag/',
    async (tagData: TagDataType, thunkAPI) => {
        try {
            const isAuth = store.getState().userServices.isAuth;
            if (isAuth) {
                const resp = await UpdateService.updateTag(tagData.post_id, tagData.tag);
                const user = resp.data.user;
                const res = {
                    error: false,
                    data: {
                        name: 200,
                        message: user,
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