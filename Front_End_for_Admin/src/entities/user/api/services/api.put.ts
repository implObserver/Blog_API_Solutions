import { instance } from '@/shared/lib';
import Cookies from 'js-cookie'
const id = Cookies.get('user_id');

export const PutService = {
    updateAvatar(avatar: File) {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }

        const file = new FormData();
        file.append('file', avatar);

        return instance.put(`/api/user/${id}/profile/update/avatar`, file, config)
    },
    updateProfile(profile: ProfileForm) {
        return instance.put(`/api/user/${id}/profile/update/`, profile)
    },
}