import { store } from "@/app/model/store/Store"
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { postsActions } from "@/entities/showcasePosts/model/slice/slice";
import { updateModelsOfPost } from "@/entities/user/model/slice/services/thunks/update/updateModelsOfPost";

export const getVirtualModels = () => {
    const models = store.getState().modelsOfOpenedPost.models;
    return models;
}

export const getVirtualPost = (index) => {
    const post = store.getState().localPosts.posts[index];
    return post;
}

export const smartUpdate = async (index: number) => {
    console.log(`adadada ${index}`)
    const userPosts = store.getState().userServices.user.posts;
    store.dispatch(postsActions.uploadPosts(userPosts))
    const elements = store.getState().posts.posts[index].elements;
    store.dispatch(modlelsOfOpenedPostActions.uploadPosts(elements))
    const models = store.getState().modelsOfOpenedPost.models;
}