import { getUserID, instance } from "@/shared/lib";

export const PutService = {
    putComment(data: PostComment) {
        const userID = getUserID();
        return instance.put(`/api/user/${userID}/post/${data.post_id}/comment/${data.id}/update`, data);
    },
}