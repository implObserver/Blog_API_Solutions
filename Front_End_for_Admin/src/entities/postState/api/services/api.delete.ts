import { getUserID, instance } from "@/shared/lib";

export const DeleteService = {
    deletePostImage(folderName: string) {
        const userID = getUserID();
        return instance.delete(`/api/user/:${userID}/posts/image/${folderName}/delete`);
    },
    deletePost(postId: number) {
        const userID = getUserID();
        return instance.delete(`/api/user/:${userID}/posts/${postId}/delete`);
    }
}