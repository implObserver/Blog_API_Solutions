import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    ImageArea,
    useElementContext
} from "@/entities/element";
import { counterActions } from "@/entities/element/model/slice/counter/slice";
import { selectModelsOfOpenedPost } from "@/entities/element/model/slice/elementsOfPost/selectors";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
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