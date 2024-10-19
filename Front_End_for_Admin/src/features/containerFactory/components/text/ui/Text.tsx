import { AppDispath } from "@/app/model/store/Store";
import { elementToModel, useElementContext } from "@/entities/element";
import { selectFocus, virtualPostActions } from "@/entities/postState";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Text = () => {
    const { element: elementContext, index, model } = useElementContext();
    const focusIndex = useSelector(selectFocus).index;
    const dispatch = useDispatch<AppDispath>();
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
        <div onKeyUp={handleKeyUp}>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea />
            </TextAreaContext.Provider>
        </div>
    );
};