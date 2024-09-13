import Editor from "react-simple-code-editor"
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import styles from './styles/Input.module.css'
import { useCodeAreaContext } from "../lib/context/Context";
import { useState } from "react";

export const CodeArea = () => {
    const context = useCodeAreaContext();
    const value = context.value.getValue();
    const [code, setCode] = useState(value);

    const handleChange = (newValue: string) => {
        console.log(newValue)
        setCode(newValue);
        context.value.setValue(newValue);
    };

    const highlight = (code: string) => {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript'); // Замените на нужный язык
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
                value={code}
                onValueChange={handleChange}
                highlight={highlight}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #ddd',
                }}

            //autoFocus={context.isFocus}
            //placeholder={context.placeholder}
            />
        </div>
    );
};