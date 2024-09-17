import { AddText, AddTitle, ClickToAddElement } from "@/features/clickToAddElement";
import { ClickToRemoveElement } from "@/features/clickToRemoveElement";
import { Factory } from "@/features/containerFactory";
import { Element, ElementContext } from "@/entities/element";
import styles from './styles/Container.module.css'
import { ContainerOS, useContainerContext } from "@/features/containerOS";
import { useCustomState } from "@/shared/lib/hooks/useCustomState";
import { DropdownContext } from "@/shared/ui/dropdownElement";
import { ExternalReset, ExternalResetContext } from "@/features/externalReset";
import { ElementListContext } from "@/entities/elementList/lib/context/Context";
import { AddImage } from "@/features/clickToAddElement/components/addIImage/ui/AddImage";
import React, { useEffect, useMemo } from "react";
import { AddListHeader } from "@/features/clickToAddElement/components/addList/ui/AddList";
import { AddCode } from "@/features/clickToAddElement/components/addCode";
import { getScrollPosition } from "@/widgets/canvas/lib/helper/getScrollPosition";

export const Container = React.memo(() => {
    const context = useContainerContext();
    const dropdownStatus = useCustomState();

    const { element, model } = context.containerContext;

    useEffect(() => {

    }, [dropdownStatus])

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

    const externalResetContext = useMemo(() => ({
        state: dropdownStatus,
        index: `${context.containerContext.index} container`,
    }), [dropdownStatus, context.containerContext.index]);

    const dropdownElementContext = useMemo(() => ({
        state: dropdownStatus.getState(),
        margin: false,
    }), [dropdownStatus]);

    const elementListContext = useMemo(() => ({
        text: <AddText key="text" />,
        title: <AddTitle key="title" />,
        image: <AddImage key="image" />,
        list_header: <AddListHeader key="list_header" />,
        code: <AddCode key="image" />,
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