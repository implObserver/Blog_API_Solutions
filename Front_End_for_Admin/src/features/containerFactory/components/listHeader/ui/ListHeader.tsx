import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    modlelsOfOpenedPostActions,
    selectFocus,
    useElementContext
} from "@/entities/element";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/ListHeader.module.css'
import { useParams } from "react-router-dom";

export const ListHeader = () => {
    const context = useElementContext();
    const focus = useSelector(selectFocus).index;
    const dispatch = useDispatch<AppDispath>();
    const postid = parseInt(useParams().postid);

    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add list name',
        value: context.element,
        maxLength: -1,
        isFocus: focus === context.index,
        updater: context.updater,
    }

    const handleChange = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            const newModel = elementToModel(context.element)
            const updateContext: UpdateElement = {
                currentModel: context.model,
                newModel,
                postid,
            }
            dispatch(modlelsOfOpenedPostActions.updateModel(updateContext));
        }
    }

    return (
        <div className={styles.list_header} onKeyUp={handleChange}>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea></TextArea>
            </TextAreaContext.Provider>
        </div>
    )
}