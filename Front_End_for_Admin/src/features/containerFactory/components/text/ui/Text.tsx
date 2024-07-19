import { AppDispath, store } from "@/app/model/store/Store";
import { elementsActions, selectElements } from "@/entities/element";
import { useWrapperContext } from "@/entities/element/components/wrapper";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { elementsToModels, elementToModel } from "@/entities/element/lib/helper/ElementsToModels";
import { updateElement } from "@/features/containerFactory/lib/helper/updateElement";
import { TextArea } from "@/shared/ui/textArea"
import { TextAreaContext } from "@/shared/ui/textArea/lib/context/Context";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Text = () => {
    const context = useElementContext();

    const textAreaContext: TextAreaContextType = {
        placeholder: '',
        value: context.elementContext,
        maxLength: -1,
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