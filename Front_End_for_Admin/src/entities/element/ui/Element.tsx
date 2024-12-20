import { Wrapper } from '../components/wrapper'
import { Panel } from '../components/panel'
import styles from './styles/Element.module.css'
import React from 'react';
import { useElementContext } from '../lib/context/Context';

export const Element = React.memo(() => {
    const context = useElementContext();
    return (
        <div className={`${styles.element} 
        ${context.element.getVisible() ? '' : styles.nogap}`}>
            <div
                className=
                {`${styles.wrapper_panel} 
            ${context.element.getVisible() ? '' : styles.hidden}`}>
                <Panel />
            </div>
            <div className={styles.wrapper}>
                <Wrapper />
            </div>
        </div>
    );
});