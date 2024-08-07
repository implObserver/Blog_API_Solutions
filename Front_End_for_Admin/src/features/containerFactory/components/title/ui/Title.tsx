import { TextArea } from "@/shared/ui/textArea";
import styles from './styles/Title.module.css';
import { useElementContext } from "@/entities/element/lib/context/Context";
import { TextAreaContext } from "@/shared/ui/textArea/lib/context/Context";
import { updateElement } from "@/features/containerFactory/lib/helper/updateElement";

export const Title = () => {
    const context = useElementContext();
    const h = context.elementContext.getFontSize();

    const handleChange = () => {
        updateElement(context);
    }

    const getTitleTextArea = (placeholder: string) => {
        const titleContext: TextAreaContextType = {
            placeholder,
            value: context.elementContext,
            maxLength: 100,
            isFocus: context.isFocus
        }
        return (
            <div onKeyUp={handleChange}>
                <TextAreaContext.Provider value={titleContext}>
                    <TextArea></TextArea>
                </TextAreaContext.Provider>
            </div>
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