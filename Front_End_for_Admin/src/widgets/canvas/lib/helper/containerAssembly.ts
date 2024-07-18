import { store } from "@/app/model/store/Store";
import { selectElements } from "@/entities/element"
import { modelsToElements } from "@/entities/element/lib/helper/ModelsToElements";
import { useSelector } from "react-redux"

export const containerAssembly = () => {
    const models = store.getState().elements.elements;
    const elements = modelsToElements(models);
    const selector: Containers = {
        containers: [],
    }

    elements.forEach((element, index) => {
        const container: Container = {
            index,
            element,
            model: models[index],
        }
        selector.containers.push(container);
    });

    return selector.containers;
}