import { store } from "@/app/model/store/Store";
import { convertModelToElement } from "@/entities/element/lib/helper/ModelsToElements";

export const modelsToContainers = (models: Model<TextModel | PreviewModel | TitleModel>[]) => {
    const containerContexts: Array<ContainerContext> = [];
    console.log(models)
    models.forEach((model, index) => {
        const element = convertModelToElement(model);
        const containerContext: ContainerContext = {
            index,
            element,
            model,
        }
        containerContexts.push(containerContext);
    })
    return containerContexts;
}