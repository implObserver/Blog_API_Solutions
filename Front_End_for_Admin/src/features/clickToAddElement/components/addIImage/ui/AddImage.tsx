import { AppDispath } from "@/app/model/store/Store";
import {
    counterActions,
    elementToModel,
    ImageArea,
    modlelsOfOpenedPostActions,
    useElementContext
} from "@/entities/element";
import { getVirtualModels } from "@/entities/element/lib/helper/getVirtualModels";
import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const AddImage = () => {
    const { model, dropdownStatus } = useElementContext();
    const dispatch = useDispatch<AppDispath>();
    const postid = parseInt(useParams().postid, 10);
    const models = getVirtualModels();

    const handleClick = () => {
        dispatch(counterActions.increment());
        const url = Date.now().toString();
        const imageArea = ImageArea();
        imageArea.setUrl(url);
        const newModel = elementToModel(imageArea);

        const postContext: CellOfPost = { postid, model, newModel };
        const modelContext: UpdateElement = { postid, model, newModel };
        const updateContext: UpdateModels = { postid, models };

        const image: ImageType = {
            code: url,
            blob: null,
            isRetry: false,
        };

        dispatch(modlelsOfOpenedPostActions.addModel(modelContext));
        dispatch(postsActions.updateModels(updateContext));
        dispatch(postsActions.addModel(postContext));
        addPostImages(postid, image);
        dropdownStatus.toggle();
    };

    return (
        <div onMouseDown={handleClick}>
            Image
        </div>
    );
};