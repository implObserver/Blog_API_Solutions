import { AppDispath } from "@/app/model/store/Store";
import { modelsActions } from "@/entities/element";
import { useContainerContext } from "@/features/containerOS/lib/context/Context";
import { useEmptyContext } from "@/features/containerOS/lib/context/EmptyContext";
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