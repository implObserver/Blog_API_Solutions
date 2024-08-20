import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    modelsActions,
    TextArea,
    useElementContext
} from "@/entities/element";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
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