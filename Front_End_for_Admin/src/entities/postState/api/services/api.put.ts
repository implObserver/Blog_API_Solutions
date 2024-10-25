import { getUserID, instance } from '@/shared/lib';

export const PutService = {
    updatePost(post: Post) {
        const userID = getUserID();
        return instance.put(`/api/user/${userID}/posts/${post.id}/update`, post)
    },
    updateModels(snapshot: Snapshot) {
        const userID = getUserID();
        return instance.put(`/api/user/${userID}/posts/${snapshot.postid}/update_models`, snapshot)
    },
    updatePublishStatusOfPost(data: UpdatePublishStatus) {
        const userID = getUserID();
        return instance.put(`/api/user/${userID}/posts/${data.postid}/update_publish_status`, data)
    },
    updateTag(postid: number, tag: string) {
        const userID = getUserID();
        return instance.put(`/api/user/${userID}/posts/${postid}/update_tag`, { postid, tag })
    },
    updateAuthor(data: UpdateAuthor) {
        const userID = getUserID();
        return instance.put(`/api/user/${userID}/posts/${data.postid}/update_author`, data)
    },
    updateTitle(data: UpdateTitle) {
        const userID = getUserID();
        return instance.put(`/api/user/${userID}/posts/${data.postid}/update_title`, data)
    },
}