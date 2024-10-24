import { instance } from '@/shared/lib';
import Cookies from 'js-cookie'
const id = Cookies.get('user_id');

export const PostService = {
    addPost(dataPost: PostForm) {
        return instance.post(`/api/user/:${id}/posts/add`, dataPost)
    },
    addImage(data: ImageUpdate) {
        const nameFolder = data.folderName;
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        const file = new FormData();
        file.append('file', data.file);
        return instance.post(`/api/user/:${id}/posts/image/${nameFolder}/update`, file, config)
    },
}