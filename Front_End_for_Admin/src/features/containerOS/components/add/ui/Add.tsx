import { AppDispath } from "@/app/model/store/Store";
import { elementToModel, modelsActions, TextArea } from "@/entities/element";
import { selectCounter } from "@/entities/element/model/slice/counter/selectors";
import { counterActions } from "@/entities/element/model/slice/counter/slice";
import { useContainerContext } from "@/features/containerOS/lib";
import { useDispatch, useSelector } from "react-redux";

export const Add = ({ children }) => {
    const context = useContainerContext();
    const counter = useSelector(selectCounter);
    const model = context.containerContext.model;
    const dispath = useDispatch<AppDispath>();

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'Enter') {
            e.preventDefault();
            const id = counter.count;
            dispath(counterActions.increment());
            const textArea = TextArea(id);
            const newModel = elementToModel(textArea);
            const elementContext: UpdateElement = {
                model,
                newModel,
            }
            dispath(modelsActions.addModel(elementContext));
        }
    }

    return (
        <div onKeyDown={keyDownHandle}>
            {children}
        </div>
    )
}