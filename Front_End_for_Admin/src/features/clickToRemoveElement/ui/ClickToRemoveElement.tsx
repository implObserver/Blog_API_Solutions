import {
    useElementContext
} from "@/entities/element";
import { removePostImage } from "@/entities/postPreview/lib";
import {
    deletePostImage,
    openedPostActions,
    virtualPostActions
} from "@/entities/postState";
import { getVirtualPost, useAppDispatch } from "@/shared/lib";
import { MinusButton } from "@/shared/ui/minusButton"
import { useParams } from "react-router-dom";

export const ClickToRemoveElement = () => {
    const dispatch = useAppDispatch();
    const { model, dropdownState: dropdownStatus } = useElementContext();
    const postid = parseInt(useParams().postid, 10);

    const handleClick = () => {
        const context: PostCell = { postid, model };
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