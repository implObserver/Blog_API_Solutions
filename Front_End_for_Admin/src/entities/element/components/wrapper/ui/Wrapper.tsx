import { useElementContext } from '@/entities/element/lib/context/Context';
import styles from './styles/Container.module.css'
import { useState } from 'react';
import { WrapperContext } from '../lib/context/Context';

export const Wrapper = () => {
    const context = useElementContext();
    return (
        <div className={styles.container}>
            {context.featuresContext.container.features}
        </div>
    )
}