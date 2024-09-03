import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    ImageArea,
    useElementContext
} from "@/entities/element";
import { selectCounter } from "@/entities/element/model/slice/counter/selectors";
import { counterActions } from "@/entities/element/model/slice/counter/slice";
import { postsActions } from "@/entities/showcasePosts/model/slice/slice";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const AddImage = () => {
    const context = useElementContext();
    const dispatch = useDispatch<AppDispath>();
    const index = useLocation().state.index;

    const clickHandle = () => {
        dispatch(counterActions.increment());
        const textArea = ImageArea();
        const newModel = elementToModel(textArea);
        const elementContext: CellOfPost = {
            index,
            model: context.model,
            newModel,
        }
        dispatch(postsActions.addModel(elementContext));
        context.dropdownStatus.toggle();
    }
    return (
        <div onMouseDown={clickHandle}>
            Image
        </div>
    )
}