import { AppDispath } from "@/app/model/store/Store";
import { focusActions, modelsActions } from "@/entities/element";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { elementToModel } from "@/entities/element/lib/helper/ElementsToModels";
import { MainTitle, Title } from "@/entities/element/lib/helper/modelsOfElements";
import { useDropdownContext } from "@/shared/ui/dropdownElement/lib/context/Context.";
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