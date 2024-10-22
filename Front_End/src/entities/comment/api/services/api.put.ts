import { instance } from "@/shared/lib";
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const PutService = {
    putComment(data: PostComment) {
        return instance.put(`/api/user/${userID}/post/${data.post_id}/comment/${data.id}/update`, data);
    },
}