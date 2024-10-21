import { instance } from "@/shared/lib";
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const GetService = {
    getPostsOfuser(data: PaginationData) {
        return instance.get(`/api/user/:${userID}/posts?page=${data.page}`);
    },
    getPostImage(url: string) {
        return instance.get(`/api/user/:${userID}/posts/image/${url}`, {
            responseType: 'blob',
        });
    },
}