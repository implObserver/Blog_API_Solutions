import { instance } from "@/app/api/api.config"
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const ReadService = {
    getAllPosts() {
        return instance.get(`/api/posts`);
    },
}