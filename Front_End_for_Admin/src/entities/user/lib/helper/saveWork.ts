import { store } from "@/app/model/store/Store"
import { updatePost } from "../../model/slice/services/thunks/update/updatePost"

export const saveWork = (index: number) => {
    const post = store.getState().userServices.user.posts[index];
    store.dispatch(updatePost(post));
}