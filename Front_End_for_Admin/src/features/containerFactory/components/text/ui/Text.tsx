import { useElementContext } from "@/entities/element";
import { updateElement } from "@/features/containerFactory/lib/helper/updateElement";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"

export const Text = () => {
    const context = useElementContext();
    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add text',
        value: context.elementContext,
        maxLength: -1,
        isFocus: context.isFocus
    }

    const handleChange = () => {
        updateElement(context);
    }

    return (
        <div onKeyUp={handleChange}>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea></TextArea>
            </TextAreaContext.Provider>
        </div>
    )
}