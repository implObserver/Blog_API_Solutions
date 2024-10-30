import { elementToModel, useElementContext } from "@/entities/element";
import { selectFocus, virtualPostActions } from "@/entities/postState";
import { useAppDispatch } from "@/shared/lib";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './styles/Text.module.css'

export const Text = () => {
    const { element: elementContext, index, model } = useElementContext();
    const focusIndex = useSelector(selectFocus).index;
    const dispatch = useAppDispatch();
    const postId = parseInt(useParams().postid, 10);

    const textAreaContext: TextAreaProps = {
        placeholder: 'Add text',
        value: elementContext,
        maxLength: -1,
        isFocused: focusIndex === index,
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') return;
        const updatedModel = elementToModel(elementContext);
        dispatch(virtualPostActions.updateModel({
            currentModel: model,
            newModel: updatedModel,
            postid: postId,
        }));
    };

    return (
        <div className={styles.text} onKeyUp={handleKeyUp}>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea />
            </TextAreaContext.Provider>
        </div>
    );
};