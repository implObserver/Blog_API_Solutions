import Editor from "react-simple-code-editor"
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min.js';
import styles from './styles/Input.module.css'
import { useCodeAreaContext } from "../lib/context/Context";
import { useCallback, useRef, useState } from "react";

export const CodeArea = () => {
    const context = useCodeAreaContext();
    const value = context.value.value;

    const handleChange = (newValue: string) => {

    };

    const decodeJSX = (input) => {
        console.log(`decode ${input}`)
        return input
            .replace(/&amp;/g, '&') // Декодируем символ &
            .replace(/&lt;/g, '<') // Декодируем символ <
            .replace(/&gt;/g, '>') // Декодируем символ >
    };

    const highlight = useCallback((code: string) => {
        return Prism.highlight(decodeJSX(code), Prism.languages.jsx, 'jsx');
    }, []);


    return (
        <div
            id={`${context.value.id}`}
            className={styles.container}>
            <Editor
                className={styles.area_code}
                value={decodeJSX(value)}
                onValueChange={handleChange}
                highlight={highlight}
                padding={10}
                placeholder={context.placeholder}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #ddd',
                }}
            />
        </div>
    );
};

//<div className={styles.editable} contentEditable={true} data-placeholder={'woooow'}></div>