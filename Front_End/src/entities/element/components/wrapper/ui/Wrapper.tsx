import { useElementContext } from '@/entities/element/lib';
import styles from './styles/Container.module.css'
import React, { useMemo } from 'react';

export const Wrapper = React.memo(() => {
    const context = useElementContext();

    const features = useMemo(() => {
        return context.featuresContext.container.features;
    }, [context.featuresContext.container.features]);

    return (
        <div>
            {features}
        </div>
    );
});