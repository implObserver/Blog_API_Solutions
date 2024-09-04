import { AppDispath } from "@/app/model/store/Store";
import { selectModelsOfOpenedPost } from "@/entities/element/model/slice/elementsOfPost/selectors";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { servicesActions } from "@/entities/user";
import { useContainerContext, useEmptyContext } from "@/features/containerOS/lib";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Remove = ({ children }) => {
    const context = useContainerContext();
    const model = context.containerContext.model;
    const dispath = useDispatch<AppDispath>();
    const isEmpty = useEmptyContext();
    const index = useLocation().state;
    const models = useSelector(selectModelsOfOpenedPost).models;

    const keyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (isEmpty.getState() && context.containerContext.index > 2) {
            const context: CellOfPost = {
                index,
                model,
            }

            const updateContext: UpdateModels = {
                index,
                models,
            }
            dispath(modlelsOfOpenedPostActions.removeModel(model));
            dispath(servicesActions.updateModels(updateContext));
            dispath(servicesActions.removeModel(context));
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