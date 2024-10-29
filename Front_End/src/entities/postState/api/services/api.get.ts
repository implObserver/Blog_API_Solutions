import { getUserID, instance } from "@/shared/lib";

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