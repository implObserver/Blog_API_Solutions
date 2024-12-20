
import { PostService } from "@/entities/comment/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const serverUrl = import.meta.env.VITE_SERVER_URL;
const socket = io(serverUrl);

export const addComment = createAsyncThunk(
    'services/add/comment/',
    async (data: PostComment, thunkAPI) => {
        try {
            const resp = await PostService.addComment(data);
            const totalComments = resp.data;
            const res = {
                error: false,
                data: {
                    name: 200,
                    message: totalComments,
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