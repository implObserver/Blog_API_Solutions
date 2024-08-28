import { instance } from "@/app/api/api.config"
import Cookies from 'js-cookie'

export const UpdateService = {
    updateAvatar(avatar: File) {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }

        const file = new FormData();
        file.append('file', avatar);

        const id = Cookies.get('user_id');

        return instance.post(`/api/user/:${id}/profile/update/avatar`, file, config)
    },
    updateProfile(profile: ProfileFormType) {
        const id = Cookies.get('user_id');
        return instance.post(`/api/user/:${id}/profile/update/`, profile)
    },
    addPost(post: Post) {
        const id = Cookies.get('user_id');
        return instance.post(`/api/user/:${id}/posts/add`, post)
    }
}