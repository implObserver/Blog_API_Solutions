import { getUserID, instance } from "@/shared/lib";

export const GetService = {
    getPostImage(url: string) {
        return instance.get(`/api/posts/image/${url}`, {
            responseType: 'blob',
        });
    },
}