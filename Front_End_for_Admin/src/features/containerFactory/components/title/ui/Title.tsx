import { TextArea, TextAreaContext } from "@/shared/ui/textArea";
import styles from './styles/Title.module.css';
import { elementToModel, useElementContext } from "@/entities/element";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectFocus, virtualPostActions } from "@/entities/postState";
import { useAppDispatch } from "@/shared/lib";

export const Title = () => {
    const context = useElementContext();
    const type = context.model.type;
    const className = type === 'main_title'
        ? styles.main_title
        : styles.title;
    const h = context.element.getFontSize();
    const focus = useSelector(selectFocus).index;
    const dispatch = useAppDispatch();
    const postid = parseInt(useParams().postid);

    const handleChange = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            const newModel = elementToModel(context.element)
            const updateContext: UpdateElement = {
                currentModel: context.model,
                newModel,
                postid,
            }
            dispatch(virtualPostActions.updateModel(updateContext));
        }
    }

    const getTitleTextArea = (placeholder: string) => {
        const titleContext: TextAreaProps = {
            placeholder,
            value: context.element,
            maxLength: 100,
            isFocused: focus === context.index,
            updater: context.updater,
        }
        return (
            <div className={className} onKeyUp={handleChange}>
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