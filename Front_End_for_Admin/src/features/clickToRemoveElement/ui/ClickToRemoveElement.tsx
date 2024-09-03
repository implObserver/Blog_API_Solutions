import { AppDispath } from "@/app/model/store/Store"
import { useElementContext } from "@/entities/element";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { postsActions } from "@/entities/showcasePosts/model/slice/slice";
import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const ClickToRemoveElement = () => {
    const dispath = useDispatch<AppDispath>();
    const elementContext = useElementContext();
    const index = useLocation().state;

    const clickHandle = () => {
        const context: CellOfPost = {
            index,
            model: elementContext.model,
        }
        dispath(postsActions.removeModel(context))
        dispath(modlelsOfOpenedPostActions.removeModel(elementContext.model))
    }

    return (
        <div onClick={clickHandle}>
            <MinusButton></MinusButton>
        </div>
    )
}