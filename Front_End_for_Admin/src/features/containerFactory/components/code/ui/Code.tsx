import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    modlelsOfOpenedPostActions,
    selectFocus,
    useElementContext
} from "@/entities/element";
import { CodeArea, CodeAreaContext } from "@/shared/ui/codeArea";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/Code.module.css'

export const Code = () => {
    const context = useElementContext();
    const focus = useSelector(selectFocus).index;
    const dispatch = useDispatch<AppDispath>();

    const codeAreaContext: TextAreaContextType = {
        placeholder: 'Add code',
        value: context.elementContext,
        maxLength: -1,
        isFocus: focus === context.index,
    }

    const handleChange = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            const newModel = elementToModel(context.elementContext);
            const updateContext: UpdateElement = {
                model: context.model,
                newModel,
            }
            dispatch(modlelsOfOpenedPostActions.updateModel(updateContext));
        }
    }

    return (
        <div className={styles.code} onKeyUp={handleChange}>
            <CodeAreaContext.Provider value={codeAreaContext}>
                <CodeArea></CodeArea>
            </CodeAreaContext.Provider>
        </div>
    )
}