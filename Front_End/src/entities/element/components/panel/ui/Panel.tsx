import { useElementContext } from "@/entities/element/lib/context/Context";
import styles from './styles/Panel.module.css'
import React, { useCallback } from "react";

export const Panel = React.memo(() => {
    const context = useElementContext();
    const features = context.featuresContext.panel.features;

    const fill = useCallback(() => {
        return features.map((feature: React.ReactElement, index) => (
            <div key={index}>
                {feature}
            </div>
        ));
    }, [features]);

    return (
        <div className={`${styles.panel} ${context.elementContext.getVisible() ? '' : styles.hidden}`}>
            {fill()}
        </div>
    );
});