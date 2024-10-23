import {
    elementToModel,
    ImageArea,
    useElementContext
} from "@/entities/element";
import { savePostImage } from "@/entities/postPreview/lib";
import {
    counterActions,
    openedPostActions,
    virtualPostActions
} from "@/entities/postState";
import { getVirtualPost, useAppDispatch } from "@/shared/lib";
import { useParams } from "react-router-dom";

export const AddImage = () => {
    const { model, dropdownState: dropdownStatus } = useElementContext();
    const dispatch = useAppDispatch();
    const postid = parseInt(useParams().postid, 10);

    const handleClick = () => {
        const models = getVirtualPost().models;
        dispatch(counterActions.increment());
        const url = Date.now().toString();
        const imageArea = ImageArea();
        imageArea.setImageUrl(url);
        const newModel = elementToModel(imageArea);

        const postContext: PostCell = { postid, model, newModel };
        const modelContext: UpdateElement = { postid, currentModel: model, newModel };
        const updateContext: UpdateModels = { postid, models };

        const image: ImageType = {
            code: url,
            version: url,
            blob: null,
            isRetry: false,
        };

        dispatch(virtualPostActions.addModel(modelContext));
        dispatch(openedPostActions.updateModels(updateContext));
        dispatch(openedPostActions.addModel(postContext));
        savePostImage(postid, image);
        dropdownStatus.toggle();
    };

    return (
        <div onMouseDown={handleClick}>
            Image
        </div>
    );
};