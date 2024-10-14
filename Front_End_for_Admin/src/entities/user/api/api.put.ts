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
    updatePost(snapshot: SnapShot) {
        return instance.put(`/api/user/${id}/posts/update`, snapshot)
    },
    updateTag(post_id: number, tag: string) {
        return instance.put(`/api/user/${id}/posts/${post_id}/update_tag`, { post_id, tag })
    },
    updatePublishStatusOfPost(data: UpdatePublishStatus) {
        console.log(data.post_id)
        return instance.put(`/api/user/${id}/posts/${data.post_id}/update_publish_status`, data)
    }
}