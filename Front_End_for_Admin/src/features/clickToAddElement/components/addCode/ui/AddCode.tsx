import { AppDispath } from "@/app/model/store/Store";
import {
    CodeArea,
    counterActions,
    elementToModel,
    modlelsOfOpenedPostActions,
    selectModelsOfOpenedPost,
    useElementContext
} from "@/entities/element";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";
import { servicesActions } from "@/entities/user";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const AddCode = () => {
    const context = useElementContext();
    const params = useParams();
    const postid = parseInt(params.postid);
    const model = context.model;
    const models = useSelector(selectModelsOfOpenedPost).models;
    const dispath = useDispatch<AppDispath>();

    const clickHandle = () => {
        dispath(counterActions.increment());
        const codeArea = CodeArea();
        const newModel = elementToModel(codeArea);

        const postContext: CellOfPost = {
            postid,
            model,
            newModel,
        }
        //dispath(modlelsOfOpenedPostActions.addModel(modelContext));
        //dispath(servicesActions.updateModels(updateContext));
        dispath(postsActions.addModel(postContext));
        context.dropdownStatus.toggle();
    }
    return (
        <div onMouseDown={clickHandle}>
            Code
        </div>
    )
}