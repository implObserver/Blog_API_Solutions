import { store } from "@/app/model/store/Store"

export const getVirtualAuthor = () => {
    const models = store.getState().modelsOfOpenedPost.author;
    return models;
}