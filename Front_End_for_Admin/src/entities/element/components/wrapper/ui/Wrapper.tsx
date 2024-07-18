import { useElementContext } from '@/entities/element/lib/context/Context';
import styles from './styles/Container.module.css'
import { useState } from 'react';
import { WrapperContext } from '../lib/context/Context';

export const Wrapper = () => {
    //const [value, setValue] = useState('');
    const context = useElementContext();
    //const wrapperContext = {
    //value,
    //setValue,
    //}
    //console.log(value)
    return (
        <div className={styles.container}>
            {context.featuresContext.container.features}
        </div>
    )
}