import { getUserID, instance } from "@/shared/lib";

const userID = getUserID();

export const ReadService = {
    getPostImage(url: string) {
        return instance.get(`/api/user/:${userID}/posts/image/${url}`, {
            responseType: 'blob',
        });
    },
    getLastModified(url: string) {
        return instance.get(`/api/user/:${userID}/posts/image/${url}/modified`);
    }
}