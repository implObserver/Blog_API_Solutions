import { instance } from "@/shared/lib";
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
    getPostImage(url: string) {
        return instance.get(`/api/user/:${userID}/posts/image/${url}`, {
            responseType: 'blob',
        });
    },
}