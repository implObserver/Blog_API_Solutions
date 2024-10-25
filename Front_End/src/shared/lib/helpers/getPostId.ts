import { getUserID } from "@/shared/lib";

const userID = getUserID();

export const getPostId = () => {
    const date = Date.now();
    const postID = `${userID}_${date}_post`;
    return postID
}