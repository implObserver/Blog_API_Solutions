import { getUserID, instance } from '@/shared/lib';

export const PostService = {
    addComment(data: PostComment) {
        const userID = getUserID();
        return instance.post(`/api/user/${userID}/post/${data.post_id}/comment/add`, data);
    }
}