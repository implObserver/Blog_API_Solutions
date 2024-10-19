import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    TextArea,
    useElementContext
} from "@/entities/element";
import { getVirtualPost } from "@/entities/postState/lib/helper/getVirtualPost";
import { counterActions, virtualPostActions } from "@/entities/postState";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const AddText = () => {
    const { model, dropdownState: dropdownStatus } = useElementContext();
    const postid = parseInt(useParams().postid, 10);
    const dispatch = useDispatch<AppDispath>();

    const handleClick = () => {
        const models = getVirtualPost().models;
        dispatch(counterActions.increment());

        const newModel = elementToModel(TextArea());

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
            Text
        </div>
    );
};