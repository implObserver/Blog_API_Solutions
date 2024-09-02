import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    focusActions,
    Title,
    useElementContext
} from "@/entities/element";
import { selectCounter } from "@/entities/element/model/slice/counter/selectors";
import { postsActions } from "@/entities/showcasePosts/model/slice/slice";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const AddTitle = () => {
    const context = useElementContext();
    const dropdown = useDropdownContext();
    const dispatch = useDispatch<AppDispath>();
    const counter = useSelector(selectCounter);
    const index = useLocation().state;

    const clickHandle = () => {
        const id = counter.count;
        const textArea = Title(id);
        const newModel = elementToModel(textArea);
        const elementContext: CellOfPost = {
            index,
            model: context.model,
            newModel,
        }
        dispatch(postsActions.addModel(elementContext));
        dispatch(focusActions.setFocus(context.index + 1));
        context.dropdownStatus.toggle();
    }

    return (
        <div onMouseDown={clickHandle}>
            Title
        </div>
    )
}