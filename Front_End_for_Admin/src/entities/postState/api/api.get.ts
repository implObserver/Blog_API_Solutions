import { instance } from "@/app/api/api.config"
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const ReadService = {
    getPostsOfuser(data: PaginationData) {
        return instance.get(`/api/user/:${userID}/posts?page=${data.page}`);
    },
}