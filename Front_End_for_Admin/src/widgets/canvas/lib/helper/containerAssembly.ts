import { store } from "@/app/model/store/Store";
import { selectElements } from "@/entities/element"
import { modelsToElements, modelToElement } from "@/entities/element/lib/helper/ModelsToElements";
import { useSelector } from "react-redux"

export const containerAssembly = () => {
    const models = store.getState().elements.elements;
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