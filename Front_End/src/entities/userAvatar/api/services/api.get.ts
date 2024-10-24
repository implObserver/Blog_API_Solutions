import { instance } from "@/shared/lib";
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const GetService = {
    getAvatar() {
        console.log(userID)
        const id = Cookies.get('user_id');
        console.log(id)
        return instance.get(`/api/user/:${id}/profile/avatar`, {
            responseType: 'blob',
        });
    },
}