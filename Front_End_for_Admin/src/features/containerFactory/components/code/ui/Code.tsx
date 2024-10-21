import {
    elementToModel,
    useElementContext
} from "@/entities/element";
import { CodeArea, CodeAreaContext } from "@/shared/ui/codeArea";
import { useSelector } from "react-redux";
import styles from './styles/Code.module.css'
import { useParams } from "react-router-dom";
import { selectFocus, virtualPostActions } from "@/entities/postState";
import { useAppDispatch } from "@/shared/lib";

export const Code = () => {
    const context = useElementContext();
    const focus = useSelector(selectFocus).index;
    const dispatch = useAppDispatch();
    const postid = parseInt(useParams().postid);

    const codeAreaContext: TextAreaProps = {
        placeholder: 'Add code',
        value: context.element,
        maxLength: -1,
        isFocused: focus === context.index,
    }

    const handleChange = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            const newModel = elementToModel(context.element)
            const updateContext: UpdateElement = {
                currentModel: context.model,
                newModel,
                postid,
            }
            dispatch(virtualPostActions.updateModel(updateContext));
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