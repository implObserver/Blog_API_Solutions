import { AppDispath } from "@/app/model/store/Store";
import { elementToModel, TextArea } from "@/entities/element";
import { ListElement } from "@/entities/element/lib/helper/modelsOfElements";
import { counterActions } from "@/entities/element/model/slice/counter/slice";
import { selectModelsOfOpenedPost } from "@/entities/element/model/slice/elementsOfPost/selectors";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { servicesActions } from "@/entities/user";
import { useContainerContext } from "@/features/containerOS/lib";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Add = ({ children }) => {
    const context = useContainerContext();
    const index = useLocation().state;
    const model = context.containerContext.model;
    const models = useSelector(selectModelsOfOpenedPost).models;
    const dispath = useDispatch<AppDispath>();

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            dispath(counterActions.increment());
            let newModel: ModelType<ModelSubtype>;
            if (model.type === 'list_header'
                || model.type === 'list_element') {
                const listElement = ListElement();
                newModel = elementToModel(listElement);
            } else {
                const textArea = TextArea();
                newModel = elementToModel(textArea);
            }

            const context: CellOfPost = {
                index,
                model,
                newModel,
            }
            const modelContext: UpdateElement = {
                model,
                newModel,
            }
            const updateContext: UpdateModels = {
                index,
                models,
            }
            dispath(modlelsOfOpenedPostActions.addModel(modelContext));
            dispath(servicesActions.updateModels(updateContext));
            dispath(servicesActions.addModel(context));
        }
    }

    return (
        <div onKeyDown={keyDownHandle}>
            {children}
        </div>
    )
}