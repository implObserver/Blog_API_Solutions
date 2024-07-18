import { useFactoryContext } from "@/features/containerFactory/lib/context/Context"
import { TextArea } from "@/shared/ui/textArea";
import styles from './styles/Title.module.css';
import { useState } from "react";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { TextAreaContext } from "@/shared/ui/textArea/lib/context/Context";
import { useWrapperContext } from "@/entities/element/components/wrapper";
import { store } from "@/app/model/store/Store";
import { elementsActions } from "@/entities/element";
import { updateElement } from "@/features/containerFactory/lib/helper/updateElement";

export const Title = () => {
    const context = useElementContext();
    console.log(context.model);
    const [value, setValue] = useState(context.elementContext.getValue());
    const h = context.elementContext.getFontSize();

    const titleContext: TextAreaContextType = {
        placeholder: 'Enter a name of this post',
        value,
        setValue,
        maxLength: 100,
    }

    context.elementContext.setValue(value);
    updateElement(context);

    const getTitleTextArea = (placeholder: String) => {
        return (
            <TextAreaContext.Provider value={titleContext}>
                <TextArea text={placeholder} maxLength={100}></TextArea>
            </TextAreaContext.Provider>
        )
    }

    if (h === 1) {
        return (
            <div className={styles.h1}>
                {getTitleTextArea('Enter a name of this post')}
            </div>
        )
    }

    if (h === 2) {
        return (
            <div className={styles.h2}>
                {getTitleTextArea('Enter a title')}
            </div>
        )
    }

    if (h === 3) {
        return (
            <div className={styles.h3}>
                {getTitleTextArea('Enter a title')}
            </div>
        )
    }
}