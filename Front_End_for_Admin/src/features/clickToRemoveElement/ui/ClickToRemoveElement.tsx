import { AppDispath } from "@/app/model/store/Store"
import { useElementContext } from "@/entities/element";
import { selectModelsOfOpenedPost } from "@/entities/element/model/slice/elementsOfPost/selectors";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { servicesActions } from "@/entities/user";
import { deleteImage } from "@/features/containerFactory/components/preview/api/deleteImage";
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
        if(imageUrl) {
            deleteImage(imageUrl);
        }
    }

    return (
        <div onClick={clickHandle}>
            <MinusButton></MinusButton>
        </div>
    )
}