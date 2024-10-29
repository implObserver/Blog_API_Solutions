import { instance } from "@/shared/lib";
import { AxiosRequestConfig } from 'axios';

export const GetService = {
    getPostImage(data: FormData) {
        const postid = data.get('postid');
        const folderName = data.get('folderName');
        const config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            responseType: 'blob',
        }
        return instance.get(`/api/posts/${postid}/image/${folderName}`, config);
    },
}