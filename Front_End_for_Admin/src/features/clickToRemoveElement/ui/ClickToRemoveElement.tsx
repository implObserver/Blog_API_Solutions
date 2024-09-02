import { AppDispath } from "@/app/model/store/Store"
import { useElementContext } from "@/entities/element";
import { selectCounter } from "@/entities/element/model/slice/counter/selectors";
import { postsActions } from "@/entities/showcasePosts/model/slice/slice";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const ClickToRemoveElement = () => {
    const dispath = useDispatch<AppDispath>();
    const elementContext = useElementContext();
    const dropdown = useDropdownContext();
    const index = useLocation().state;
    const counter = useSelector(selectCounter);

    const clickHandle = () => {
        const context: CellOfPost = {
            index,
            model: elementContext.model,
        }
        dispath(postsActions.removeModel(context))
    }

    return (
        <div onClick={clickHandle}>
            <MinusButton></MinusButton>
        </div>
    )
}