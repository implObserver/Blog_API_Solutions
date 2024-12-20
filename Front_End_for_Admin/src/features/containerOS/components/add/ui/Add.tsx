import {
    elementToModel,
    ListElement,
    TextArea
} from "@/entities/element";
import {
    counterActions,
    openedPostActions,
    virtualPostActions
} from "@/entities/postState";
import { useContainerContext } from "@/features/containerOS/lib";
import { getVirtualPost, useAppDispatch } from "@/shared/lib";
import { useParams } from "react-router-dom";

export const Add = ({ children }) => {
    const { containerContext } = useContainerContext();
    const postId = parseInt(useParams().postid, 10);
    const { model } = containerContext;
    const dispatch = useAppDispatch();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'Enter' || model.type === 'code') return;
        const models = getVirtualPost().models;

        e.preventDefault();
        dispatch(counterActions.increment());

        const newModel = model.type === 'list_header' || model.type === 'list_element'
            ? elementToModel(ListElement())
            : elementToModel(TextArea());
        const updateModelsContext: UpdateModels = { postid: postId, models };
        const updateElementContext: UpdateElement = { postid: postId, currentModel: model, newModel };
        const addModelContext: PostCell = { postid: postId, model, newModel };

        dispatch(virtualPostActions.addModel(updateElementContext));
        dispatch(openedPostActions.updateModels(updateModelsContext));
        dispatch(openedPostActions.addModel(addModelContext));
    };

    return <div onKeyDown={handleKeyDown}>{children}</div>;
};