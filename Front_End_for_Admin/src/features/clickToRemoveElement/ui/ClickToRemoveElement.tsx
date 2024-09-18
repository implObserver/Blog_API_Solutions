import { AppDispath } from "@/app/model/store/Store"
import {
    modlelsOfOpenedPostActions,
    selectModelsOfOpenedPost,
    useElementContext
} from "@/entities/element";
import { deletePostImage, servicesActions } from "@/entities/user";
import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const ClickToRemoveElement = () => {
    const dispath = useDispatch<AppDispath>();
    const elementContext = useElementContext();
    const index = useLocation().state;
    const models = useSelector(selectModelsOfOpenedPost).models;

    const clickHandle = () => {
        const context: CellOfPost = {
            index,
            model: elementContext.model,
        }

        const updateContext: UpdateModels = {
            index,
            models,
        }
        dispath(modlelsOfOpenedPostActions.removeModel(elementContext.model));
        dispath(servicesActions.updateModels(updateContext));
        dispath(servicesActions.removeModel(context));
        const imageUrl = elementContext.model.imageUrl;
        if (imageUrl) {
            deletePostImage(imageUrl);
        }
    }

    return (
        <div onClick={clickHandle}>
            <MinusButton></MinusButton>
        </div>
    )
}