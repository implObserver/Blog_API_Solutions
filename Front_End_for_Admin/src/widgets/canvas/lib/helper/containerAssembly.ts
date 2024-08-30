import { store } from "@/app/model/store/Store";
import { modelsActions } from "@/entities/element";
import { modelToElement } from "@/entities/element/lib/helper/ModelsToElements";

export const containerAssembly = (postModels: ModelType<TextAreaModel | PreviewModel | TitleModel>[]) => {
    const models = store.getState().models.models;
   
    console.log(models)
    const containerContexts: Array<ContainerContext> = [];

    models.forEach((model, index) => {
        const element = modelToElement(model);
        const containerContext: ContainerContext = {
            index,
            element,
            model,
        }
        containerContexts.push(containerContext);
    })

    console.log(containerContexts)
    return containerContexts;
}