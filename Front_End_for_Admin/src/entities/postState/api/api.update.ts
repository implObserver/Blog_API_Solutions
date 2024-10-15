import { instance } from "@/app/api/api.config"
import Cookies from 'js-cookie'
const id = Cookies.get('user_id');


export const UpdateService = {
    updatePost(snapshot: SnapShot) {
        return instance.put(`/api/user/${id}/posts/update`, snapshot)
    },
}