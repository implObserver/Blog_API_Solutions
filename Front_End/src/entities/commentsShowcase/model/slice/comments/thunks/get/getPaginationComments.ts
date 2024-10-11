import { ReadService } from "@/entities/commentsShowcase/api/api.get";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPaginationComments = createAsyncThunk(
    'services/get/paginationComments',
    async (data: PaginationData, thunkAPI) => {
        try {
            const resp = await ReadService.getPaginationComments(data);
            const comments = resp.data;
            const res = {
                error: false,
                data: {
                    name: 200,
                    message: comments,
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