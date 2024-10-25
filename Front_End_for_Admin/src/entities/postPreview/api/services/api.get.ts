import { getUserID, instance } from "@/shared/lib";

export const GetService = {
    getPostImage(url: string) {
        const userID = getUserID();
        return instance.get(`/api/user/:${userID}/posts/image/${url}`, {
            responseType: 'blob',
        });
    },
}