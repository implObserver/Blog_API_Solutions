import { AppDispath } from "@/app/model/store/Store";
import { elementToModel, selectFocus, useElementContext } from "@/entities/element";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { CodeArea } from "@/shared/ui/codeArea";
import { CodeAreaContext } from "@/shared/ui/codeArea/lib/context/Context";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import { useDispatch, useSelector } from "react-redux";

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
        console.log('cod')
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            const newModel = elementToModel(context.elementContext);
            console.log(newModel)
            const updateContext: UpdateElement = {
                model: context.model,
                newModel,
            }
            dispatch(modlelsOfOpenedPostActions.updateModel(updateContext));
        }
    }

    return (
        <div onKeyUp={handleChange}>
            <CodeAreaContext.Provider value={codeAreaContext}>
                <CodeArea></CodeArea>
            </CodeAreaContext.Provider>
        </div>
    )
}