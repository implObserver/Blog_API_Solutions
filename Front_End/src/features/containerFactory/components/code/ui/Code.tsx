import {
    useElementContext
} from "@/entities/element";
import { CodeArea, CodeAreaContext } from "@/shared/ui/codeArea";
import styles from './styles/Code.module.css'

export const Code = () => {
    const context = useElementContext();

    const codeAreaContext: TextAreaContextType = {
        placeholder: 'Add code',
        value: context.model,
    }

    return (
        <div className={styles.code}>
            <CodeAreaContext.Provider value={codeAreaContext}>
                <CodeArea></CodeArea>
            </CodeAreaContext.Provider>
        </div>
    )
}