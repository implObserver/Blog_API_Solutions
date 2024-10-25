import { getUserID, instance } from "@/shared/lib";

const userID = getUserID();

export const DeleteService = {
    deletePostImage(folderName: string) {
        return instance.delete(`/api/user/:${userID}/posts/image/${folderName}/delete`);
    },
    deletePost(postId: number) {
        return instance.delete(`/api/user/:${userID}/posts/${postId}/delete`);
    }
}