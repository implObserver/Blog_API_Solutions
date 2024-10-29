import { getUserID, instance } from "@/shared/lib";

export const DeleteService = {
    deletePostImage(data: FormData) {
        const userID = getUserID();
        const folderName = data.get('folderName');
        const postid = data.get('postid');
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        return instance.delete(`/api/user/${userID}/posts/${postid}/${folderName}/delete`, config);
    },
    deletePost(postId: number) {
        const userID = getUserID();
        return instance.delete(`/api/user/${userID}/posts/${postId}/delete`);
    }
}