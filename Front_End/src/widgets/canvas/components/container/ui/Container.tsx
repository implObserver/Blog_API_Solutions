import { Factory } from "@/features/containerFactory";
import { Element, ElementContext } from "@/entities/element";
import styles from './styles/Container.module.css'
import React from "react";
import { useContainerContext } from "@/widgets/canvas/lib";

export const Container = React.memo(() => {
    const context = useContainerContext();

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