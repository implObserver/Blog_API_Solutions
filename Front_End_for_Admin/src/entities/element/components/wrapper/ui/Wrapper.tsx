import { useElementContext } from '@/entities/element/lib/context/Context';
import styles from './styles/Container.module.css'
import React, { useMemo } from 'react';

export const Wrapper = React.memo(() => {
    const context = useElementContext();

    // Используем useMemo для мемоизации списка features
    const features = useMemo(() => {
        return context.featuresContext.container.features;
    }, [context.featuresContext.container.features]);

    return (
        <div className={styles.container}>
            {features}
        </div>
    );
});