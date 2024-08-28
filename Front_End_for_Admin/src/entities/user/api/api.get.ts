import { instance } from "@/app/api/api.config"
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const ReadService = {
    readProfile() {
        return instance.get(`/api/user/:${userID}/profile/`);
    },
    readPostsOfuser() {
        return instance.get(`/api/user/:${userID}/posts/`);
    },
    getAvatar() {
        return instance.get(`/api/user/:${userID}/profile/avatar`, {
            responseType: 'blob', // Специфицируем, что ожидаем blob
        });
    },
}