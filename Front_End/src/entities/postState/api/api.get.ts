import { instance } from "@/app/api/api.config"
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const ReadService = {
    getPostToId(postid: number) {
        return instance.get(`/api/posts/${postid}`);
    },
    getPaginationPosts(data: PaginationData) {
        return instance.get(`/api/posts?page=${data.page}`);
    },
    getPosts() {
        return instance.get(`/api/posts/`);
    },
}