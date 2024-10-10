import { ReadService } from "@/entities/user/api/api.get";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPosts = createAsyncThunk(
    'services/get/allPosts',
    async (thunkAPI) => {
      
    }
)