import { instance } from "@/shared/lib";

export const GetService = {
    getPaginationComments(data: PaginationData) {
        return instance.get(`/api/comments?postid=${data.postid}&page=${data.page}`);
    },
}