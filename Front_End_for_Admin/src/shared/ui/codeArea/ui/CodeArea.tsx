import Editor from "react-simple-code-editor"
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min.js';
import styles from './styles/Input.module.css'
import { useCodeAreaContext } from "../lib/context/Context";
import { useCallback, useState } from "react";

export const CodeArea = () => {
    const context = useCodeAreaContext();
    const [update, setUpdate] = useState(false);

    const decodeJSX = (input) => {
        return input
            .replace(/&amp;/g, '&') // Декодируем символ &
            .replace(/&lt;/g, '<') // Декодируем символ <
            .replace(/&gt;/g, '>') // Декодируем символ >
    };

    const value = context.value.getValue();

    const handleChange = (newValue: string) => {
        context.value.setValue(newValue);
        setUpdate(!update);
    };

    const highlight = useCallback((code: string) => {
        return Prism.highlight(code, Prism.languages.jsx, 'jsx');
    }, []);

    return (
        <div
            id={`${context.value.getId()}`}
            className={styles.container}>
            <Editor
                className={styles.area_code}
                autoFocus={context.isFocused}
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