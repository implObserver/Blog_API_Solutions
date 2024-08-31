import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    focusActions,
    modelsActions,
    Title,
    useElementContext
} from "@/entities/element";
import { selectCounter } from "@/entities/element/model/slice/counter/selectors";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
import { useDispatch, useSelector } from "react-redux";

export const AddTitle = () => {
    const context = useElementContext();
    const dropdown = useDropdownContext();
    const dispatch = useDispatch<AppDispath>();
    const counter = useSelector(selectCounter

    );
    const clickHandle = () => {
        const id = counter.count;
        const textArea = Title(id);
        const newModel = elementToModel(textArea);
        const elementContext: UpdateElement = {
            model: context.model,
            newModel,
        }
        dispatch(modelsActions.addModel(elementContext));
        dispatch(focusActions.setFocus(context.index + 1));
        context.dropdownStatus.toggle();
        dropdown.canvas.toggle();
    }

    return (
        <div onMouseDown={clickHandle}>
            Title
        </div>
    )
}