import { ClickToRemoveElement } from "@/features/clickToRemoveElement";
import { Factory } from "@/features/containerFactory";
import { Element, ElementContext } from "@/entities/element";
import styles from './styles/Container.module.css'
import { ContainerOS, useContainerContext } from "@/features/containerOS";
import { DropdownContext } from "@/shared/ui/dropdownElement";
import React, { useMemo } from "react";
import { useCustomState } from "@/shared/lib";
import { ElementListContext } from "@/entities/elementList";
import {
    AddCode,
    AddImage,
    AddListHeader,
    AddText,
    AddTitle,
    ClickToAddElement
} from "@/features/clickToAddElement";

export const Container = React.memo(() => {
    const context = useContainerContext();
    const dropdownStatus = useCustomState();
    const { element, model, index } = context.containerContext;

    const elementContext: CanvasElement = {
        featuresContext: {
            panel: {
                features: [
                    <ClickToAddElement key={`${model.id}_add`} />,
                    <ClickToRemoveElement key={`${model.id}_remove`} />,
                ],
            },
            container: {
                features: <Factory key={`${model.id}_factory`} />,
            },
        },
        element: element,
        model,
        dropdownState: dropdownStatus,
        index,
    };

    const dropdownElementContext: DropdownState = {
        isOpen: dropdownStatus.getState(),
        hasMargin: false,
    };

    const elementListContext: ElementListContextType = useMemo(() => ({
        text: <AddText key="text" />,
        title: <AddTitle key="title" />,
        image: <AddImage key="image" />,
        list_header: <AddListHeader key="list_header" />,
        code: <AddCode key="code" />,
    }), []);

    return (
        <div className={styles.container}>
            <DropdownContext.Provider value={dropdownElementContext}>
                <ElementListContext.Provider value={elementListContext}>
                    <ElementContext.Provider value={elementContext}>
                        <ContainerOS>
                            <Element />
                        </ContainerOS>
                    </ElementContext.Provider>
                </ElementListContext.Provider>
            </DropdownContext.Provider>
        </div>
    );
});