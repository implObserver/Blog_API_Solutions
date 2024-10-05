import { AppDispath } from "@/app/model/store/Store";
import {
    CodeArea,
    counterActions,
    elementToModel,
    modlelsOfOpenedPostActions,
    selectModelsOfOpenedPost,
    useElementContext
} from "@/entities/element";
import { servicesActions } from "@/entities/user";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const AddCode = () => {
    const context = useElementContext();
    const params = useParams();
    const post_id = parseInt(params.postid);
    const model = context.model;
    const models = useSelector(selectModelsOfOpenedPost).models;
    const dispath = useDispatch<AppDispath>();

    const clickHandle = () => {
        dispath(counterActions.increment());
        const codeArea = CodeArea();
        const newModel = elementToModel(codeArea);

        const postContext: CellOfPost = {
            post_id,
            model,
            newModel,
        }
        const modelContext: UpdateElement = {
            model,
            newModel,
        }
        const updateContext: UpdateModels = {
            post_id,
            models,
        }
        dispath(modlelsOfOpenedPostActions.addModel(modelContext));
        dispath(servicesActions.updateModels(updateContext));
        dispath(servicesActions.addModel(postContext));

        context.dropdownStatus.toggle();
    }
    return (
        <div onMouseDown={clickHandle}>
            Code
        </div>
    )
}