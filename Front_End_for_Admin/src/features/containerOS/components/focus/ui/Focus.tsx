import { AppDispath } from "@/app/model/store/Store";
import { focusActions, selectModels } from "@/entities/element";
import { useContainerContext } from "@/features/containerOS/lib/context/Context";
import { useEmptyContext } from "@/features/containerOS/lib/context/EmptyContext";
import { useDispatch, useSelector } from "react-redux";

export const Focus = ({ children }) => {
    const context = useContainerContext();
    const dispath = useDispatch<AppDispath>();
    const select = useSelector(selectModels);
    const isEmpty = useEmptyContext();

    const keyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        console.log('wtf')
        if (e.key === 'ArrowUp' || e.key == 'ArrowDown') {
            e.stopPropagation();
            e.preventDefault();
        }

        if (isEmpty.getState() && context.containerContext.index > 2) {
            if (context.containerContext.index > 0) {
                dispath(focusActions.setFocus(context.containerContext.index - 1))
                context.canvasUpdate.toggle();
            }
        }

        if (e.key === 'ArrowUp' && context.containerContext.index > 0) {
            let index = context.containerContext.index - 1;
            const model = select.models[index];
            if (model.type === 'preview') {
                index--;
            }
            dispath(focusActions.setFocus(index))

        }

        if (e.key === 'ArrowDown' && context.containerContext.index < select.models.length - 1) {
            let index = context.containerContext.index + 1;
            const model = select.models[index];
            if (model.type === 'preview') {
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
            context.canvasUpdate.toggle();
        }
    }

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as SVGAnimateElement;
        if (element.tagName === 'svg') {
            const className = element.classList.value;
            if (className.includes('minus')) {
                dispath(focusActions.setFocus(context.containerContext.index - 1));
                context.canvasUpdate.toggle();
            }
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