import { getUserID, instance } from '@/shared/lib';

const id = getUserID();

export const PostService = {
    addComment(data: PostComment) {
        return instance.post(`/api/user/${id}/post/${data.post_id}/comment/add`, data);
    }
}