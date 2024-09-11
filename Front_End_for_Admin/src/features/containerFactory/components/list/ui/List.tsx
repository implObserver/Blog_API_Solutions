import { AppDispath } from "@/app/model/store/Store";
import { elementToModel, selectFocus, useElementContext } from "@/entities/element";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { ListArea } from "@/shared/ui/listArea";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import { useDispatch, useSelector } from "react-redux";

export const List = () => {
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
        <div onKeyUp={handleChange}>
            <TextAreaContext.Provider value={textAreaContext}>
                <ListArea></ListArea>
            </TextAreaContext.Provider>
        </div>
    )
}