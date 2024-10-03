import { instance } from "@/app/api/api.config"
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const ReadService = {
    getPosts() {
        return instance.get(`/api/posts/`);
    },
    readProfile() {
        return instance.get(`/api/user/:${userID}/profile/`);
    },
    readPostsOfuser() {
        return instance.get(`/api/user/:${userID}/posts/`);
    },
    getAvatar() {
        return instance.get(`/api/user/:${userID}/profile/avatar`, {
            responseType: 'blob',
        });
    },
    getPostImage(url: string) {
        return instance.get(`/api/user/:${userID}/posts/image/${url}`, {
            responseType: 'blob',
        });
    },
}