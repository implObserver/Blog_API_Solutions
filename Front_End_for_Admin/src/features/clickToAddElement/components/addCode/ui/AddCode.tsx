import { AppDispath } from "@/app/model/store/Store";
import {
    CodeArea,
    counterActions,
    elementToModel,
    modlelsOfOpenedPostActions,
    useElementContext
} from "@/entities/element";
import { getVirtualModels } from "@/entities/element/lib/helper/getVirtualModels";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const AddCode = () => {
    const { model, dropdownStatus } = useElementContext();
    const dispatch = useDispatch<AppDispath>();
    const postid = parseInt(useParams().postid, 10);
    const models = getVirtualModels();

    const handleClick = () => {
        dispatch(counterActions.increment());

        const codeArea = CodeArea();
        const newModel = elementToModel(codeArea);

        const postContext: CellOfPost = { postid, model, newModel };
        const modelContext: UpdateElement = { postid, model, newModel };
        const updateContext: UpdateModels = { postid, models };

        dispatch(modlelsOfOpenedPostActions.addModel(modelContext));
        dispatch(postsActions.updateModels(updateContext));
        dispatch(postsActions.addModel(postContext));

        dropdownStatus.toggle();
    };

    return (
        <div onMouseDown={handleClick}>
            Code
        </div>
    );
};