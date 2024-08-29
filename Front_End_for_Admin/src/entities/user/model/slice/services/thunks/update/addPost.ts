import { UpdateService } from "@/entities/user/api/api.post";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addPost = createAsyncThunk(
    'services/add/post/',
    async (dataPost: PostFormType, thunkAPI) => {
        try {
            const resp = await UpdateService.addPost(dataPost);
            console.log(resp)
            const user = resp.data.user;
            return user;
        } catch (error) {
            return false;
        }
    }
)