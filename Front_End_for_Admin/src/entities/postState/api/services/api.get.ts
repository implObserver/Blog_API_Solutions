import { getUserID, instance } from "@/shared/lib";

const userID = getUserID();

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