import { AppDispath } from "@/app/model/store/Store";
import {
    counterActions,
    elementToModel,
    ListElement,
    modlelsOfOpenedPostActions,
    TextArea
} from "@/entities/element";
import { getVirtualModels } from "@/entities/element/lib/helper/getVirtualModels";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { useContainerContext } from "@/features/containerOS/lib";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const Add = ({ children }) => {
    const { containerContext } = useContainerContext();
    const postId = parseInt(useParams().postid, 10);
    const { model } = containerContext;
    const models = getVirtualModels();
    const dispatch = useDispatch<AppDispath>();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'Enter' || model.type === 'code') return;

        e.preventDefault();
        dispatch(counterActions.increment());

        const newModel = model.type === 'list_header' || model.type === 'list_element'
            ? elementToModel(ListElement())
            : elementToModel(TextArea());

        const updateModelsContext: UpdateModels = { postid: postId, models };
        const updateElementContext: UpdateElement = { postid: postId, currentModel: model, newModel };
        const addModelContext: CellOfPost = { postid: postId, model, newModel };

        dispatch(modlelsOfOpenedPostActions.addModel(updateElementContext));
        dispatch(openedPostActions.updateModels(updateModelsContext));
        dispatch(openedPostActions.addModel(addModelContext));
    };

    return <div onKeyDown={handleKeyDown}>{children}</div>;
};