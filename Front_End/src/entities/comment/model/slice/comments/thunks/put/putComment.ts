import { PutService } from "@/entities/comment/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const putComment = createAsyncThunk(
    'services/put/comment/',
    async (comment: PostComment, thunkAPI) => {
        try {
            const resp = await PutService.putComment(comment);
            const data = resp.data;
            const res = {
                error: false,
                data: {
                    name: 200,
                    message: data,
                },
            }
            return res;
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