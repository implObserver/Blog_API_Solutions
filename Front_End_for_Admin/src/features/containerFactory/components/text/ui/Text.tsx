import { AppDispath } from "@/app/model/store/Store";
import { elementsActions, selectElements } from "@/entities/element";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { TextArea } from "@/shared/ui/textArea"
import { TextAreaContext } from "@/shared/ui/textArea/lib/context/Context";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Text = () => {
    const context = useElementContext();
    const elements = useSelector(selectElements).elements;
    console.log(context.modelContext.index)
    const [value, setValue] = useState(elements[context.modelContext.index].container.value);
    const dispatch = useDispatch<AppDispath>();

    dispatch(elementsActions.saveToLocalStorage());

    const textAreaContext: TextAreaContextType = {
        placeholder: '',
        value,
        setValue,
        maxLength: -1,
    }

    return (
        <TextAreaContext.Provider value={textAreaContext}>
            <TextArea text={context.modelContext.container.value} maxLength={-1}></TextArea>
        </TextAreaContext.Provider>
    )
}