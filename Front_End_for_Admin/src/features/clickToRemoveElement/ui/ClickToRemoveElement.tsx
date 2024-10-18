import { AppDispath } from "@/app/model/store/Store"
import {
    virtualPostActions,
    useElementContext
} from "@/entities/element";
import { getVirtualPost } from "@/entities/element/lib/helper/getVirtualPost";
import { removePostImage } from "@/entities/postPreview/lib/helper/indexedDB/removePostImage";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { deletePostImage } from "@/entities/postState/model/slice/openedPost/thunks/delete/deletePostImage";

import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const ClickToRemoveElement = () => {
    const dispatch = useDispatch<AppDispath>();
    const { model, dropdownState: dropdownStatus } = useElementContext();
    const postid = parseInt(useParams().postid, 10);

    const handleClick = () => {
        const context: CellOfPost = { postid, model };
        const models = getVirtualPost().models;

        dispatch(virtualPostActions.removeModel(model));
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