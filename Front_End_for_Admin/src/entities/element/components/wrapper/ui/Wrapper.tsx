import { useElementContext } from '@/entities/element/lib';
import styles from './styles/Container.module.css'
import React, { useMemo } from 'react';

export const Wrapper = React.memo(() => {
    const context = useElementContext();

    const features = useMemo(() => {
        return context.features.container.features;
    }, [context.features.container.features]);

    return (
        <div className={styles.container}>
            {features}
        </div>
    );
});