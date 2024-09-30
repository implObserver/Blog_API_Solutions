import Cookies from 'js-cookie'

export const getPostId = () => {
    const userID = Cookies.get('user_id');
    const date = Date.now();
    const postID = `${userID}_${date}_post`;
    return postID
}