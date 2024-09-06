import { store } from "@/app/model/store/Store"

export const getVirtualModels = () => {
    const models = store.getState().modelsOfOpenedPost.models;
    return models;
}