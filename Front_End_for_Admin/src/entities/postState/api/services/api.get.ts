import { getUserID, instance } from "@/shared/lib";

export const GetService = {
    getPostsOfuser(data: PaginationData) {
        const userID = getUserID();
        return instance.get(`/api/user/:${userID}/posts?page=${data.page}`);
    },
    getPostImage(url: string) {
        const userID = getUserID();
        return instance.get(`/api/user/:${userID}/posts/image/${url}`, {
            responseType: 'blob',
        });
    },
}