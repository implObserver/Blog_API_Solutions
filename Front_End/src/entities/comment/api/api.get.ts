import { instance } from "@/app/api/api.config"
import Cookies from "js-cookie";
const userID = Cookies.get('user_id');

export const ReadService = {
    getPaginationComments(data: PaginationData) {
        return instance.get(`/api/comments?postid=${data.postid}&page=${data.page}`);
    },
}