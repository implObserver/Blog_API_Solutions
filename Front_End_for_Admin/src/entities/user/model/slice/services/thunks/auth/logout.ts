import { store } from "@/app/model/store/Store";
import { AuthService } from "@/entities/user/api/api.auth";
import { UpdateService } from "@/entities/user/api/api.put";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
    'services/auth/logout',
    async (thunkApi, { getState }) => {
        const snaphot = store.getState().snapshot.snapshot;
        if (snaphot) {
            await UpdateService.updatePost(snaphot)
        }
        localStorage.clear();
        indexedDB.deleteDatabase('blog_api_creater_idb');
        AuthService.logout();
    }
)