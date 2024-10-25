import { instance } from "@/shared/lib";

export const ReadService = {
    getPostImage(url: string) {
        return instance.get(`/api/posts/image/${url}`, {
            responseType: 'blob',
        });
    },
    getLastModified(url: string) {
        return instance.get(`/api/posts/image/${url}/modified`);
    }
}