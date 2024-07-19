import { ClickToAddElement } from "@/features/clickToAddElement";
import { useContainerContext } from "../lib/context/Context"
import { ClickToRemoveElement } from "@/features/clickToRemoveElement";
import { Factory } from "@/features/containerFactory";
import { Element, ElementContext, elementsActions } from "@/entities/element";
import styles from './styles/Container.module.css'
import { TextArea } from "@/entities/element/lib/helper/ElementValue";
import { elementToModel } from "@/entities/element/lib/helper/ElementsToModels";
import { useDispatch } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { useState } from "react";
import { containerAssembly } from "@/widgets/canvas/lib/helper/containerAssembly";

export const Container = () => {
    const context = useContainerContext();
    const element = context.containerContext.element;
    const model = context.containerContext.model;
    const dispath = useDispatch<AppDispath>();
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

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const element = e.target as HTMLTextAreaElement;
        if (element.value === '') {
            if (e.key === 'Backspace') {
                console.log(model.id)
                dispath(elementsActions.removeElement(model));
                context.canvasUpdate.toggle();
            }
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            const textArea = TextArea();
            const newModel = elementToModel(textArea);
            const elementContext: UpdateElement = {
                model,
                newModel,
            }
            dispath(elementsActions.addElement(elementContext));
            context.canvasUpdate.toggle();
        }
    }

    return (
        <div onKeyDown={keyDownHandle} className={styles.container}>
            <ElementContext.Provider value={elementContext}>
                <Element></Element>
            </ElementContext.Provider>
        </div>
    )
}