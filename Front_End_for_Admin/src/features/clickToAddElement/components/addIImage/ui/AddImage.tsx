import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    ImageArea,
    modelsActions,
    useElementContext
} from "@/entities/element";
import { selectCounter } from "@/entities/element/model/slice/counter/selectors";
import { counterActions } from "@/entities/element/model/slice/counter/slice";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
import { useDispatch, useSelector } from "react-redux";

export const AddImage = () => {
    const context = useElementContext();
    const counter = useSelector(selectCounter);
    const dropdown = useDropdownContext();
    const dispatch = useDispatch<AppDispath>();
    const clickHandle = () => {
        const id = counter.count;
        dispatch(counterActions.increment());
        const textArea = ImageArea(id);
        const newModel = elementToModel(textArea);
        console.log(newModel)
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
            Image
        </div>
    )
}