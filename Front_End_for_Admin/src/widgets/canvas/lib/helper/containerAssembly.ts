import { store } from "@/app/model/store/Store";
import { selectElements } from "@/entities/element"
import { useSelector } from "react-redux"

export const containerAssembly = () => {
    const elements = store.getState().elements.elements;

    const selector: Containers = {
        containers: [],
    }

    elements.forEach((element, index) => {
        const container: Container = {
            index,
            model_element: element
        }
        selector.containers.push(container);
    });

    return selector.containers;
}