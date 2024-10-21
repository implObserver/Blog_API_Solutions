import {
    elementToModel,
    useElementContext
} from "@/entities/element";
import { ListArea, ListAreaContext } from "@/shared/ui/listArea";
import { useSelector } from "react-redux";
import styles from './styles/ListElement.module.css'
import { useParams } from "react-router-dom";
import { selectFocus, virtualPostActions } from "@/entities/postState";
import { useAppDispatch } from "@/shared/lib";

export const ListElement = () => {
    const context = useElementContext();
    const focus = useSelector(selectFocus).index;
    const dispatch = useAppDispatch();
    const postid = parseInt(useParams().postid);

    const textAreaContext: TextAreaProps = {
        placeholder: 'Add text',
        strongPlaceholder: 'Strong',
        value: context.element,
        maxLength: 40,
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
        <div className={styles.list_element} onKeyUp={handleChange}>
            <ul>
                <ListAreaContext.Provider value={textAreaContext}>
                    <ListArea></ListArea>
                </ListAreaContext.Provider>
            </ul>
        </div>
    )
}