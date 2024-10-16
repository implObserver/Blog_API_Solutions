import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    modlelsOfOpenedPostActions,
    selectFocus,
    useElementContext
} from "@/entities/element";
import { ListArea, ListAreaContext } from "@/shared/ui/listArea";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/ListElement.module.css'
import { useParams } from "react-router-dom";

export const ListElement = () => {
    const context = useElementContext();
    const focus = useSelector(selectFocus).index;
    const dispatch = useDispatch<AppDispath>();
    const postid = parseInt(useParams().postid);

    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add text',
        strongPlaceholder: 'Strong',
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
                postid,
            }
            dispatch(modlelsOfOpenedPostActions.updateModel(updateContext));
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