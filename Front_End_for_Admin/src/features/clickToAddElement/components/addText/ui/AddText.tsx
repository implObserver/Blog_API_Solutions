import { AppDispath } from "@/app/model/store/Store";
import { modelsActions } from "@/entities/element";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { elementToModel } from "@/entities/element/lib/helper/ElementsToModels";
import { TextArea } from "@/entities/element/lib/helper/ElementValue";
import { useDropdownContext } from "@/shared/ui/dropdownElement/lib/context/Context.";
import { useDispatch } from "react-redux";

export const AddText = () => {
    const context = useElementContext();
    const dropdown = useDropdownContext();
    const dispatch = useDispatch<AppDispath>();
    const clickHandle = () => {
        const textArea = TextArea();
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