import { AppDispath } from "@/app/model/store/Store";
import {
    counterActions,
    elementToModel,
    modlelsOfOpenedPostActions,
    TextArea,
    useElementContext
} from "@/entities/element";
import { getVirtualModels } from "@/entities/element/lib/helper/getVirtualModels";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const AddText = () => {
    const { model, dropdownStatus } = useElementContext();
    const postid = parseInt(useParams().postid, 10);
    const models = getVirtualModels();
    const dispatch = useDispatch<AppDispath>();

    const handleClick = () => {
        dispatch(counterActions.increment());

        const newModel = elementToModel(TextArea());

        const postContext: CellOfPost = { postid, model, newModel };
        const modelContext: UpdateElement = { postid, model, newModel };
        const updateContext: UpdateModels = { postid, models };

        dispatch(modlelsOfOpenedPostActions.addModel(modelContext));
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