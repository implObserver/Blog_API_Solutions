import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    modelsActions,
    TextArea,
    useElementContext
} from "@/entities/element";
import { selectCounter } from "@/entities/element/model/slice/counter/selectors";
import { counterActions } from "@/entities/element/model/slice/counter/slice";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const AddText = () => {
    const context = useElementContext();
    const counter = useSelector(selectCounter);
    const dropdown = useDropdownContext();
    const dispatch = useDispatch<AppDispath>();
    const post = useLocation().state;
   
    const clickHandle = () => {
        const id = counter.count;
        dispatch(counterActions.increment());
        const textArea = TextArea(id);
        const newModel = elementToModel(textArea);
        const elementContext: UpdateElement = {
            model: context.model,
            newModel,
        }
        dispatch(modelsActions.addModel(elementContext));
        context.dropdownStatus.toggle();
        dropdown.canvas.toggle();
    }
    return (
        <div onMouseDown={clickHandle}>
            Text
        </div>
    )
}