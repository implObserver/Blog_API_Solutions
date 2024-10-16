import { TextArea, TextAreaContext } from "@/shared/ui/textArea";
import styles from './styles/Title.module.css';
import { elementToModel, modlelsOfOpenedPostActions, selectFocus, useElementContext } from "@/entities/element";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { useParams } from "react-router-dom";

export const Title = () => {
    const context = useElementContext();
    const type = context.model.type;
    const className = type === 'main_title'
        ? styles.main_title
        : styles.title;
    const h = context.elementContext.getFontSize();
    const focus = useSelector(selectFocus).index;
    const dispatch = useDispatch<AppDispath>();
    const postid = parseInt(useParams().postid);

    const handleChange = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            const newModel = elementToModel(context.elementContext)
            const updateContext: UpdateElement = {
                model: context.model,
                newModel,
                postid,
            }
            dispatch(modlelsOfOpenedPostActions.updateModel(updateContext));
        }
    }

    const getTitleTextArea = (placeholder: string) => {
        const titleContext: TextAreaContextType = {
            placeholder,
            value: context.elementContext,
            maxLength: 100,
            isFocus: focus === context.index,
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