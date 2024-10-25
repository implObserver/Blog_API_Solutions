import { getUserID, instance } from '@/shared/lib';

export const DeleteService = {
    deleteComment(data: PostComment) {
        const userID = getUserID();
        return instance.delete(`/api/user/${userID}/post/${data.post_id}/comment/${data.id}/delete`);
    }
}