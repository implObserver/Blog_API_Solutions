import { useFactoryContext } from "@/features/containerFactory/lib/context/Context"
import { TextArea } from "@/shared/ui/textArea";
import styles from './styles/Title.module.css';
import { useState } from "react";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { TextAreaContext } from "@/shared/ui/textArea/lib/context/Context";

export const Title = () => {
    const context = useElementContext();
    const [value, setValue] = useState(context.modelContext.container.value);
    const h = context.modelContext.container.nNum;

    const titleContext: TextAreaContextType = {
        placeholder: 'Enter a name of this post',
        value,
        setValue,
        maxLength: 100,
    }

    const getTitleTextArea = (placeholder: String) => {
        return (
            <TextAreaContext.Provider value={titleContext}>
                <TextArea text={placeholder} maxLength={100}></TextArea>
            </TextAreaContext.Provider>
        )
    }

    if (h === 'h1') {
        return (
            <div className={styles.h1}>
                {getTitleTextArea('Enter a name of this post')}
            </div>
        )
    }

    if (h === 'h2') {
        return (
            <div className={styles.h2}>
                {getTitleTextArea('Enter a title')}
            </div>
        )
    }

    if (h === 'h3') {
        return (
            <div className={styles.h3}>
                {getTitleTextArea('Enter a title')}
            </div>
        )
    }
}