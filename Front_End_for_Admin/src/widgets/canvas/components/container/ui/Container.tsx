import { AddText, AddTitle, ClickToAddElement } from "@/features/clickToAddElement";
import { ClickToRemoveElement } from "@/features/clickToRemoveElement";
import { Factory } from "@/features/containerFactory";
import { Element, ElementContext, selectFocus } from "@/entities/element";
import styles from './styles/Container.module.css'
import { useSelector } from "react-redux";
import { ContainerOS, useContainerContext } from "@/features/containerOS";
import { useCustomState } from "@/shared/lib/hooks/useCustomState";
import { DropdownContext } from "@/shared/ui/dropdownElement";
import { ExternalReset, ExternalResetContext } from "@/features/externalReset";
import { ShowElementTypes } from "@/features/showElementTypes/ui/ShowElementTypes";
import { ElementListContext } from "@/entities/elementList/lib/context/Context";
import { AddImage } from "@/features/clickToAddElement/components/addIImage/ui/AddImage";
import React, { useMemo } from "react";

export const Container = React.memo(() => {
    const context = useContainerContext();
    const dropdownStatus = useCustomState();

    // Мемоизация element и model
    const { element, model } = context.containerContext;

    // Создание контекста для элемента
    const elementContext = useMemo(() => ({
        featuresContext: {
            panel: {
                features: [
                    <ClickToAddElement key="add" />,
                    <ClickToRemoveElement key="remove" />,
                ],
            },
            container: {
                features: <Factory key="factory" />,
            },
        },
        elementContext: element,
        model,
        dropdownStatus,
        index: context.containerContext.index,
    }), [element, model, dropdownStatus, context.containerContext.index]);

    // Контекст для внешнего сброса
    const externalResetContext = useMemo(() => ({
        state: dropdownStatus,
        index: `${context.containerContext.index} container`,
    }), [dropdownStatus, context.containerContext.index]);

    // Контекст для выпадающего списка
    const dropdownElementContext = useMemo(() => ({
        state: dropdownStatus.getState(),
        margin: false,
    }), [dropdownStatus]);

    // Контекст для списка элементов
    const elementListContext = useMemo(() => ({
        text: <AddText key="text" />,
        title: <AddTitle key="title" />,
        image: <AddImage key="image" />,
    }), []);

    return (
        <div className={styles.container}>
            <ExternalResetContext.Provider value={externalResetContext}>
                <ExternalReset>
                    <DropdownContext.Provider value={dropdownElementContext}>
                        <ElementListContext.Provider value={elementListContext}>
                            <ElementContext.Provider value={elementContext}>
                                <ContainerOS>
                                    <Element />
                                </ContainerOS>
                            </ElementContext.Provider>
                        </ElementListContext.Provider>
                    </DropdownContext.Provider>
                </ExternalReset>
            </ExternalResetContext.Provider>
            {Date.now()}
        </div>
    );
});