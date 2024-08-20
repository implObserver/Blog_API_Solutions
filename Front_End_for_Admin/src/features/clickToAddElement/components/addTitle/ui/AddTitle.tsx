import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    focusActions,
    modelsActions,
    Title,
    useElementContext
} from "@/entities/element";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
import { useDispatch } from "react-redux";

export const AddTitle = () => {
    const context = useElementContext();
    const dropdown = useDropdownContext();
    const dispatch = useDispatch<AppDispath>();

    const clickHandle = () => {
        const textArea = Title();
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