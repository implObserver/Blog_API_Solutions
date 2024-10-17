import { AppDispath } from "@/app/model/store/Store"
import {
    modlelsOfOpenedPostActions,
    useElementContext
} from "@/entities/element";
import { getVirtualModels } from "@/entities/element/lib/helper/getVirtualModels";
import { removePostImage } from "@/entities/postPreview/lib/helper/removePostImageFromIDB";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { deletePostImage } from "@/entities/user";
import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const ClickToRemoveElement = () => {
    const dispatch = useDispatch<AppDispath>();
    const { model, dropdownState: dropdownStatus } = useElementContext();
    const postid = parseInt(useParams().postid, 10);
    const models = getVirtualModels();

    const handleClick = () => {
        const context: CellOfPost = { postid, model };

        dispatch(modlelsOfOpenedPostActions.removeModel(model));
        dispatch(openedPostActions.updateModels({ postid, models }));
        dispatch(openedPostActions.removeModel(context));

        const imageUrl = model.imageUrl;
        if (imageUrl) {
            deletePostImage(imageUrl);
            removePostImage(postid, imageUrl);
        }
    };

    return (
        <div onClick={handleClick}>
            <MinusButton />
        </div>
    );
};