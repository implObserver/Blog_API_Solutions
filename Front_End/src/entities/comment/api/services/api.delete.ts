import { instance } from '@/shared/lib';
import Cookies from 'js-cookie'
const id = Cookies.get('user_id');

export const DeleteService = {
    deleteComment(data: PostComment) {
        return instance.delete(`/api/user/${id}/post/${data.post_id}/comment/${data.id}/delete`);
    }
}