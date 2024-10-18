import { AppDispath } from "@/app/model/store/Store";
import {
    CodeArea,
    counterActions,
    elementToModel,
    virtualPostActions,
    useElementContext
} from "@/entities/element";
import { getVirtualPost } from "@/entities/element/lib/helper/getVirtualPost";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const AddCode = () => {
    const { model, dropdownState: dropdownStatus } = useElementContext();
    const dispatch = useDispatch<AppDispath>();
    const postid = parseInt(useParams().postid, 10);

    const handleClick = () => {
        const models = getVirtualPost().models;
        dispatch(counterActions.increment());

        const codeArea = CodeArea();
        const newModel = elementToModel(codeArea);

        const postContext: CellOfPost = { postid, model, newModel };
        const modelContext: UpdateElement = { postid, currentModel: model, newModel };
        const updateContext: UpdateModels = { postid, models };

        dispatch(virtualPostActions.addModel(modelContext));
        dispatch(openedPostActions.updateModels(updateContext));
        dispatch(openedPostActions.addModel(postContext));

        dropdownStatus.toggle();
    };

    return (
        <div onMouseDown={handleClick}>
            Code
        </div>
    );
};