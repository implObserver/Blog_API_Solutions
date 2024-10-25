import { getUserID, instance } from "@/shared/lib";

const userID = getUserID();

export const GetService = {
    getPostImage(url: string) {
        return instance.get(`/api/user/:${userID}/posts/image/${url}`, {
            responseType: 'blob',
        });
    },
}