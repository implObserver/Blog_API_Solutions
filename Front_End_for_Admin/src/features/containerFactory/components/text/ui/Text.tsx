import { useElementContext } from "@/entities/element";
import { updateElement } from "@/features/containerFactory/lib/helper/updateElement";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import { useLocation } from "react-router-dom";

export const Text = () => {
    const context = useElementContext();
    const index = useLocation().state;
    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add text',
        value: context.elementContext,
        maxLength: -1,
        isFocus: context.isFocus
    }

    const handleChange = () => {
        updateElement(context, index);
    }

    return (
        <div onKeyUp={handleChange}>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea></TextArea>
            </TextAreaContext.Provider>
        </div>
    )
}