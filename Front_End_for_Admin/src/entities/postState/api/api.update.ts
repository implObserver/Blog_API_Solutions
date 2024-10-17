import { instance } from "@/app/api/api.config"
import Cookies from 'js-cookie'
const id = Cookies.get('user_id');


export const UpdateService = {
    updatePost(snapshot: Snapshot) {
        return instance.put(`/api/user/${id}/posts/update`, snapshot)
    },
    updatePublishStatusOfPost(data: UpdatePublishStatus) {
        console.log(data.post_id)
        return instance.put(`/api/user/${id}/posts/${data.post_id}/update_publish_status`, data)
    },
    updateTag(post_id: number, tag: string) {
        return instance.put(`/api/user/${id}/posts/${post_id}/update_tag`, { post_id, tag })
    },
    updateAuthor(data: UpdateAuthor) {
        return instance.put(`/api/user/${id}/posts/${data.postid}/update_author`, data)
    },
    updateTitle(data: UpdateTitle) {
        return instance.put(`/api/user/${id}/posts/${data.postid}/update_title`, data)
    },
}