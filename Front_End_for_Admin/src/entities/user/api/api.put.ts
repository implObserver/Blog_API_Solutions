import { instance } from "@/app/api/api.config"
import Cookies from 'js-cookie'
const id = Cookies.get('user_id');


export const UpdateService = {
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
    updateProfile(profile: ProfileFormType) {
        return instance.put(`/api/user/${id}/profile/update/`, profile)
    },
}