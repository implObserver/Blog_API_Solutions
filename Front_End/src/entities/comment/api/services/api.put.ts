import { getUserID, instance } from "@/shared/lib";

const userID = getUserID();

export const PutService = {
    putComment(data: PostComment) {
        return instance.put(`/api/user/${userID}/post/${data.post_id}/comment/${data.id}/update`, data);
    },
}