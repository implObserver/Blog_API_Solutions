import Editor from "react-simple-code-editor"
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min.js';
import styles from './styles/Input.module.css'
import { useCodeAreaContext } from "../lib/context/Context";
import { useState } from "react";

export const CodeArea = () => {
    const context = useCodeAreaContext();
    const value = context.value.getValue();
    const [update, setUpdate] = useState(false);

    const handleChange = (newValue: string) => {
        setUpdate(!update);
        context.value.setValue(newValue);
    };

    const highlight = (code: string) => {
        return Prism.highlight(code, Prism.languages.jsx, 'jsx'); // Замените на нужный язык
    };

    const focusHandle = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        element.setSelectionRange(element.value.length, element.value.length);
    };

    return (
        <div className={styles.container}>
            <Editor
                className={styles.area_code}
                autoFocus={context.isFocus}
                value={value}
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