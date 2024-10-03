import { Factory } from "@/features/containerFactory";
import { Element, ElementContext } from "@/entities/element";
import styles from './styles/Container.module.css'
import React from "react";
import { useCustomState } from "@/shared/lib";
import { useContainerContext } from "@/widgets/canvas/lib/context/Context";



export const Container = React.memo(() => {
    const context = useContainerContext();
    const dropdownStatus = useCustomState();

    const model = context.model;

    const elementContext: CanvasElement = {
        featuresContext: {
            container: {
                features: <Factory key="factory" />,
            },
        },
        model,
        index: context.index,
    };

    return (
        <div className={styles.container}>
            <ElementContext.Provider value={elementContext}>
                    <Element />
            </ElementContext.Provider>
        </div>
    );
});