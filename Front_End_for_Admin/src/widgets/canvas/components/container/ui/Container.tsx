import { ClickToAddElement } from "@/features/clickToAddElement";
import { useContainerContext } from "../lib/context/Context"
import { ClickToRemoveElement } from "@/features/clickToRemoveElement";
import { Factory } from "@/features/containerFactory";
import { Element, ElementContext } from "@/entities/element";
import styles from './styles/Container.module.css'

export const Container = () => {
    const container = useContainerContext();
    const element = container.element;
    const model = container.model;

    const elementContext: CanvasElement = {
        featuresContext: {
            panel: {
                features: [
                    <ClickToAddElement></ClickToAddElement>,
                    <ClickToRemoveElement></ClickToRemoveElement>
                ],
            },
            container: {
                features: <Factory></Factory>,
            }
        },
        elementContext: element,
        model,
    }

    return (
        <div className={styles.container}>
            <ElementContext.Provider value={elementContext}>
                <Element></Element>
            </ElementContext.Provider>
        </div>
    )
}