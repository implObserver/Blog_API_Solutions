import { instance } from "@/app/api/api.config"
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const DeleteService = {
    deletePostImage(folderName: string) {
        return instance.delete(`/api/user/:${userID}/posts/image/${folderName}/delete`);
    },
    deletePost(postId: number) {
        return instance.delete(`/api/user/:${userID}/posts/${postId}/delete`);
    }
}