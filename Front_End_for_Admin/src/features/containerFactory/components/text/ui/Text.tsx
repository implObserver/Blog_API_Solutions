import { AppDispath } from "@/app/model/store/Store";
import { elementToModel, selectFocus, useElementContext } from "@/entities/element";
import { selectCounter } from "@/entities/element/model/slice/counter/selectors";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { localPostsActions } from "@/entities/element/model/slice/localPosts/slice";
import { postsActions } from "@/entities/showcasePosts/model/slice/slice";
import { updateElement } from "@/features/containerFactory/lib/helper/updateElement";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Text = () => {
    const context = useElementContext();
    const index = useLocation().state;
    const focus = useSelector(selectFocus).index;
    const dispatch = useDispatch<AppDispath>();

    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add text',
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
        <div onKeyUp={handleChange}>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea></TextArea>
                {Date.now()}
            </TextAreaContext.Provider>
        </div>
    )
}