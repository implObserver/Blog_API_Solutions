import { AppDispath } from "@/app/model/store/Store";
import { focusActions } from "@/entities/element";
import { selectModelsOfOpenedPost } from "@/entities/element/model/slice/elementsOfPost/selectors";
import { useContainerContext, useEmptyContext } from "@/features/containerOS/lib";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Focus = ({ children }) => {
    const context = useContainerContext();
    const dispath = useDispatch<AppDispath>();
    const isEmpty = useEmptyContext();
    const models = useSelector(selectModelsOfOpenedPost).models;

    const keyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key == 'ArrowDown') {
            e.stopPropagation();
            e.preventDefault();
        }

        if (isEmpty.getState() && context.containerContext.index > 2) {
            if (context.containerContext.index > 0) {
                dispath(focusActions.setFocus(context.containerContext.index - 1))
            }
        }

        if (e.key === 'ArrowUp' && context.containerContext.index > 0) {
            let index = context.containerContext.index - 1;
            console.log(index)
            const model = models[index];

            if (model.type === 'preview') {
                console.log(model)
                index--;
            }
            console.log(index)
            dispath(focusActions.setFocus(index))
        }

        if (e.key === 'ArrowDown') {
            let index = context.containerContext.index + 1;
            const model = context.containerContext.model;
            if (model.type === 'preview' || '') {
                index++;
            }

            dispath(focusActions.setFocus(index))

        }
    }

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowUp' || e.key == 'ArrowDown') {
            e.stopPropagation();
            e.preventDefault();
        }

        if (e.key === 'Enter') {
            e.preventDefault();
            dispath(focusActions.setFocus(context.containerContext.index + 1))
        }
    }

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'svg') {
            const className = element.classList.value;
            if (className.includes('minus')) {
                dispath(focusActions.setFocus(context.containerContext.index - 1));
            }
        } else if (element.tagName === 'TEXTAREA') {
            dispath(focusActions.setFocus(context.containerContext.index));
        }
    }

    return (
        <div
            onKeyDown={keyDownHandle}
            onKeyUp={keyUpHandle}
            onClick={clickHandle}
        >
            {children}
        </div>
    )
}