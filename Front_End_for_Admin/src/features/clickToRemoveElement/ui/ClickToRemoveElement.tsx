import { AppDispath } from "@/app/model/store/Store"
import {
    modlelsOfOpenedPostActions,
    selectModelsOfOpenedPost,
    useElementContext
} from "@/entities/element";
import { removePostImage } from "@/entities/postPreview/lib/helper/removePostImageFromIDB";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";
import { deletePostImage, servicesActions } from "@/entities/user";
import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ClickToRemoveElement = () => {
    const dispath = useDispatch<AppDispath>();
    const elementContext = useElementContext();
    const params = useParams();
    const postid = parseInt(params.postid);
    const models = useSelector(selectModelsOfOpenedPost).models;

    const clickHandle = () => {

        const context: CellOfPost = {
            postid,
            model: elementContext.model,
        }

        dispath(postsActions.removeModel(context));
        const imageUrl = elementContext.model.imageUrl;
        if (imageUrl) {
            deletePostImage(imageUrl);
            removePostImage(postid, imageUrl);
        }
    }

    return (
        <div onClick={clickHandle}>
            <MinusButton></MinusButton>
        </div>
    )
}