import { store } from "@/app/model/store/Store"

export const getVirtualPost = () => {
    const virtualPost = store.getState().virtualPost.post;
    return virtualPost;
}