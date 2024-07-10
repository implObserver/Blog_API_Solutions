import { useFactoryContext } from "@/features/containerFactory/lib/context/Context"
import { TextArea } from "@/shared/ui/textArea";
import styles from './styles/Title.module.css';

export const Title = () => {
    const context = useFactoryContext();
    const h = context.hNum;

    const getTitleTextArea = (placeholder: String) => {
        return <TextArea text={placeholder} maxLength={100}></TextArea>
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