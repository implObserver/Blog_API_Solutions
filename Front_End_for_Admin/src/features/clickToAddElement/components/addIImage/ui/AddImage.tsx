import { AppDispath } from "@/app/model/store/Store";
import {
    counterActions,
    elementToModel,
    ImageArea,
    modlelsOfOpenedPostActions,
    selectModelsOfOpenedPost,
    useElementContext
} from "@/entities/element";
import { servicesActions } from "@/entities/user";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const AddImage = () => {
    const context = useElementContext();
    const dispath = useDispatch<AppDispath>();
    const index = useLocation().state;
    const model = context.model;
    const models = useSelector(selectModelsOfOpenedPost).models;

    const clickHandle = () => {
        dispath(counterActions.increment());
        const url = Date.now();
        const textArea = ImageArea();
        console.log(url.toString())
        textArea.setUrl(url.toString())
        const newModel = elementToModel(textArea);
        const postContext: CellOfPost = {
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
        dispath(servicesActions.addModel(postContext));
        context.dropdownStatus.toggle();
    }
    return (
        <div onMouseDown={clickHandle}>
            Image
        </div>
    )
}