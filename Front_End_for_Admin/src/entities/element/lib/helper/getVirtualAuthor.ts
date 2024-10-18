import { store } from "@/app/model/store/Store"

export const getVirtualAuthor = () => {
    console.log(store.getState().virtualPost)
    const virtualAuthor = store.getState().virtualPost.post.author;
    
    return virtualAuthor;
}