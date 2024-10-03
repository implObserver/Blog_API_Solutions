import { useElementContext } from "@/entities/element";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"

export const Text = () => {
    const context = useElementContext();

    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add text',
        value: context.model,
        maxLength: -1,
    }

    return (
        <div>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea></TextArea>
            </TextAreaContext.Provider>
        </div>
    )
}