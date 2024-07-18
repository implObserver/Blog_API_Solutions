import { AppDispath, store } from "@/app/model/store/Store";
import { elementsActions, selectElements } from "@/entities/element";
import { useWrapperContext } from "@/entities/element/components/wrapper";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { elementsToModels } from "@/entities/element/lib/helper/ElementsToModels";
import { updateElement } from "@/features/containerFactory/lib/helper/updateElement";
import { TextArea } from "@/shared/ui/textArea"
import { TextAreaContext } from "@/shared/ui/textArea/lib/context/Context";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Text = () => {
    const context = useElementContext();
    const [value, setValue] = useState(context.elementContext.getValue());

    const textAreaContext: TextAreaContextType = {
        placeholder: '',
        value,
        setValue,
        maxLength: -1,
    }
    
    context.elementContext.setValue(value);
    updateElement(context);

    return (
        <div>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea text={''} maxLength={-1}></TextArea>
            </TextAreaContext.Provider>
        </div>
    )
}