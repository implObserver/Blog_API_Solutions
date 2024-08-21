import { AppDispath } from "@/app/model/store/Store";
import { modelsActions } from "@/entities/element";
import { useContainerContext, useEmptyContext } from "@/features/containerOS/lib";
import { useDispatch } from "react-redux";

export const Remove = ({ children }) => {
    const context = useContainerContext();
    const model = context.containerContext.model;
    const dispath = useDispatch<AppDispath>();
    const isEmpty = useEmptyContext();

    const keyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (isEmpty.getState() && context.containerContext.index > 2) {
            dispath(modelsActions.removeModel(model));
            isEmpty.setState(false);
        }

    }

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const element = e.target as HTMLTextAreaElement;

        if (element.value === '') {
            if (e.key === 'Backspace') {
                isEmpty.setState(true);
            }
        }

    }

    return (
        <div onKeyDown={keyDownHandle} onKeyUp={keyUpHandle}>
            {children}
        </div>
    )
}