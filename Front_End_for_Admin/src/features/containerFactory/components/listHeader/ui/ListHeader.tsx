import { AppDispath } from "@/app/model/store/Store";
import { elementToModel, selectFocus, useElementContext } from "@/entities/element";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/ListHeader.module.css'

export const ListHeader = () => {
    const context = useElementContext();
    const focus = useSelector(selectFocus).index;
    const dispatch = useDispatch<AppDispath>();

    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add list name',
        value: context.elementContext,
        maxLength: -1,
        isFocus: focus === context.index,
    }

    const handleChange = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            const newModel = elementToModel(context.elementContext)
            const updateContext: UpdateElement = {
                model: context.model,
                newModel,
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