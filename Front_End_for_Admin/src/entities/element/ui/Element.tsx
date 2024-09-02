import { Wrapper } from '../components/wrapper'
import { Panel } from '../components/panel'
import styles from './styles/Element.module.css'
import React from 'react';

export const Element = React.memo(() => {
    return (
        <div className={styles.element}>
            <Panel />
            <Wrapper />
        </div>
    );
});