import { AppDispath } from "@/app/model/store/Store";
import {
    counterActions,
    elementToModel,
    ImageArea,
    virtualPostActions,
    useElementContext
} from "@/entities/element";
import { getVirtualPost } from "@/entities/element/lib/helper/getVirtualPost";
import { savePostImage } from "@/entities/postPreview/lib/helper/indexedDB/savePostImage";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const AddImage = () => {
    const { model, dropdownState: dropdownStatus } = useElementContext();
    const dispatch = useDispatch<AppDispath>();
    const postid = parseInt(useParams().postid, 10);

    const handleClick = () => {
        const models = getVirtualPost().models;
        dispatch(counterActions.increment());
        const url = Date.now().toString();
        const imageArea = ImageArea();
        imageArea.setUrl(url);
        const newModel = elementToModel(imageArea);

        const postContext: CellOfPost = { postid, model, newModel };
        const modelContext: UpdateElement = { postid, currentModel: model, newModel };
        const updateContext: UpdateModels = { postid, models };

        const image: ImageType = {
            code: url,
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