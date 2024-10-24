import { instance } from '@/shared/lib';
import Cookies from 'js-cookie'
const id = Cookies.get('user_id');

export const PostService = {
    addComment(data: PostComment) {
        return instance.post(`/api/user/${id}/post/${data.post_id}/comment/add`, data);
    }
}