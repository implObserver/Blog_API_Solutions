import { store } from "@/app/model/store/Store"

export const getVirtualModels = (postid: number) => {
    const posts = store.getState().userPosts.posts;
    const post = posts.find(post => post.id === postid);
    return post.elements;
}