import {
    elementToModel,
    ListHeader,
    useElementContext
} from "@/entities/element";
import { counterActions, virtualPostActions } from "@/entities/postState";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { getVirtualPost, useAppDispatch } from "@/shared/lib";
import { useParams } from "react-router-dom";

export const AddListHeader = () => {
    const { model, dropdownState: dropdownStatus } = useElementContext();
    const postid = parseInt(useParams().postid, 10);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        const models = getVirtualPost().models;
        dispatch(counterActions.increment());

        const newModel = elementToModel(ListHeader());

        const postContext: PostCell = { postid, model, newModel };
        const modelContext: UpdateElement = { postid, currentModel: model, newModel };
        const updateContext: UpdateModels = { postid, models };

        dispatch(virtualPostActions.addModel(modelContext));
        dispatch(openedPostActions.updateModels(updateContext));
        dispatch(openedPostActions.addModel(postContext));

        dropdownStatus.toggle();
    };

    return (
        <div onMouseDown={handleClick}>
            List
        </div>
    );
};