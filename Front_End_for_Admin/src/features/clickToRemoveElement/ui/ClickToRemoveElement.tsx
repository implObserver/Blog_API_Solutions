import { AppDispath } from "@/app/model/store/Store"
import {
    modlelsOfOpenedPostActions,
    selectModelsOfOpenedPost,
    useElementContext
} from "@/entities/element";
import { removePostImage } from "@/entities/postPreview/lib/helper/removePostImageFromIDB";
import { deletePostImage, servicesActions } from "@/entities/user";
import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ClickToRemoveElement = () => {
    const dispath = useDispatch<AppDispath>();
    const elementContext = useElementContext();
    const params = useParams();
    const post_id = parseInt(params.postid);
    const models = useSelector(selectModelsOfOpenedPost).models;

    const clickHandle = () => {

        const context: CellOfPost = {
            post_id,
            model: elementContext.model,
        }

        const updateContext: UpdateModels = {
            post_id,
            models,
        }

        dispath(modlelsOfOpenedPostActions.removeModel(elementContext.model));
        dispath(servicesActions.updateModels(updateContext));
        dispath(servicesActions.removeModel(context));
        const imageUrl = elementContext.model.imageUrl;
        if (imageUrl) {
            deletePostImage(imageUrl);
            removePostImage(post_id, imageUrl);
        }
    }

    return (
        <div onClick={clickHandle}>
            <MinusButton></MinusButton>
        </div>
    )
}