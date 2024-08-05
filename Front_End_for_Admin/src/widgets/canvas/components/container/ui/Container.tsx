import { ClickToAddElement } from "@/features/clickToAddElement";
import { useContainerContext } from "../lib/context/Context"
import { ClickToRemoveElement } from "@/features/clickToRemoveElement";
import { Factory } from "@/features/containerFactory";
import { Element, ElementContext, modelsActions, focusActions, selectModels } from "@/entities/element";
import styles from './styles/Container.module.css'
import { TextArea } from "@/entities/element/lib/helper/ElementValue";
import { elementToModel } from "@/entities/element/lib/helper/ElementsToModels";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { selectFocus } from "@/entities/element/model/slice/focus/selectors";

export const Container = () => {
    const context = useContainerContext();
    const element = context.containerContext.element;
    const model = context.containerContext.model;
    const dispath = useDispatch<AppDispath>();
    const focus = useSelector(selectFocus);
    const select = useSelector(selectModels);
    let isEmpty = false;

    const elementContext: CanvasElement = {
        featuresContext: {
            panel: {
                features: [
                    <ClickToAddElement></ClickToAddElement>,
                    <ClickToRemoveElement></ClickToRemoveElement>
                ],
            },
            container: {
                features: <Factory></Factory>,
            }
        },
        elementContext: element,
        model,
        isFocus: focus.index === context.containerContext.index,
    }

    const keyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowUp' || e.key == 'ArrowDown') {
            e.stopPropagation();
            e.preventDefault();
        }

        if (isEmpty && context.containerContext.index > 2) {
            dispath(modelsActions.removeModel(model));
            if (context.containerContext.index > 0) {
                dispath(focusActions.setFocus(context.containerContext.index - 1))
            }
            isEmpty = false;
            context.canvasUpdate.toggle();
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
        const element = e.target as HTMLTextAreaElement;

        if (e.key === 'ArrowUp' || e.key == 'ArrowDown') {
            e.stopPropagation();
            e.preventDefault();
        }

        if (element.value === '') {
            if (e.key === 'Backspace') {
                isEmpty = true;
            }
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            const textArea = TextArea();
            const newModel = elementToModel(textArea);
            const elementContext: UpdateElement = {
                model,
                newModel,
            }
            dispath(modelsActions.addModel(elementContext));
            dispath(focusActions.setFocus(context.containerContext.index + 1))
            context.canvasUpdate.toggle();
        }
    }

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as SVGAnimateElement;
        if (element.tagName === 'svg') {
            const className = element.classList.value;
            if(className.includes('minus')) {
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
            className={styles.container}>
            <ElementContext.Provider value={elementContext}>
                <Element></Element>
            </ElementContext.Provider>
        </div>
    )
}