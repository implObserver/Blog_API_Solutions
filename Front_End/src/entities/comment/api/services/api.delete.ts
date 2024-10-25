import { getUserID, instance } from '@/shared/lib';

const id = getUserID();

export const DeleteService = {
    deleteComment(data: PostComment) {
        return instance.delete(`/api/user/${id}/post/${data.post_id}/comment/${data.id}/delete`);
    }
}