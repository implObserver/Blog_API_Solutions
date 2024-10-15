import { AppDispath } from "@/app/model/store/Store";
import {
    counterActions,
    elementToModel,
    ListElement,
    modlelsOfOpenedPostActions,
    selectModelsOfOpenedPost,
    TextArea
} from "@/entities/element";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";

import { servicesActions } from "@/entities/user";
import { useContainerContext } from "@/features/containerOS/lib";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Add = ({ children }) => {
    const context = useContainerContext();
    const params = useParams();
    const postid = parseInt(params.postid);
    const model = context.containerContext.model;
    const models = useSelector(selectModelsOfOpenedPost).models;
    const dispath = useDispatch<AppDispath>();

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && model.type !== 'code') {
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
                postid,
                model,
                newModel,
            }
            //dispath(modlelsOfOpenedPostActions.addModel(modelContext));
            //dispath(postsActions.updateModels(updateContext));
            dispath(postsActions.addModel(context));
        }
    }

    return (
        <div onKeyDown={keyDownHandle}>
            {children}
        </div>
    )
}