import { Wrapper } from '../components/wrapper'
import styles from './styles/Element.module.css'
import React from 'react';

export const Element = React.memo(() => {
    return (
        <div>
            <Wrapper />
        </div>
    );
});