import { useElementContext } from "@/entities/element/lib/context/Context";
import { updateElement } from "@/features/containerFactory/lib/helper/updateElement";
import { TextArea } from "@/shared/ui/textArea"
import { TextAreaContext } from "@/shared/ui/textArea/lib/context/Context";


export const Text = () => {
    const context = useElementContext();
    const textAreaContext: TextAreaContextType = {
        placeholder: '',
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