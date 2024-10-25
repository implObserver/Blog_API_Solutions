import { getUserID } from '@/shared/lib';

export const getPostId = () => {
    const userID = getUserID();
    const date = Date.now();
    const postID = `${userID}_${date}_post`;
    return postID
}