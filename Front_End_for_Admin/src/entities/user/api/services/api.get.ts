import { instance } from "@/shared/lib";
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const GetService = {
    readProfile() {
        return instance.get(`/api/user/:${userID}/profile/`);
    },
    readPostsOfuser() {
        return instance.get(`/api/user/:${userID}/posts/`);
    },
    getAvatar() {
        console.log(userID)
        const id = Cookies.get('user_id');
        console.log(id)
        return instance.get(`/api/user/:${userID}/profile/avatar`, {
            responseType: 'blob',
        });
    },
}