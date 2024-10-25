import { getUserID, instance } from '@/shared/lib';

const userID = getUserID();

export const PutService = {
    updatePost(post: Post) {
        return instance.put(`/api/user/${userID}/posts/${post.id}/update`, post)
    },
    updateModels(snapshot: Snapshot) {
        return instance.put(`/api/user/${userID}/posts/${snapshot.postid}/update_models`, snapshot)
    },
    updatePublishStatusOfPost(data: UpdatePublishStatus) {
        return instance.put(`/api/user/${userID}/posts/${data.postid}/update_publish_status`, data)
    },
    updateTag(postid: number, tag: string) {
        return instance.put(`/api/user/${userID}/posts/${postid}/update_tag`, { postid, tag })
    },
    updateAuthor(data: UpdateAuthor) {
        return instance.put(`/api/user/${userID}/posts/${data.postid}/update_author`, data)
    },
    updateTitle(data: UpdateTitle) {
        return instance.put(`/api/user/${userID}/posts/${data.postid}/update_title`, data)
    },
}