import { store } from "@/app/model/store/Store";
import { modelToElement } from "@/entities/element/lib/helper/ModelsToElements";

export const modelsToContainers = (models: ModelType<TextAreaModel | PreviewModel | TitleModel>[]) => {
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
    return containerContexts;
}