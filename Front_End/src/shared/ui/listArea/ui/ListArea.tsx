import { useEffect, useRef, useState } from 'react';
import { useListAreaContext } from '../lib/context/Context';
import styles from './styles/Input.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import { Strong } from '../components/strong';
import { Body } from '../components/body';

export const ListArea = () => {
    return (
        <li className={styles.li} key={Math.random()}>
            <div className={styles.container}>
                <Strong></Strong>
                <Body></Body>
            </div>
        </li>
    )
}