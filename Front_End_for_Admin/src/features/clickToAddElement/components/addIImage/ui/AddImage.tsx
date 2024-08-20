import { AppDispath } from "@/app/model/store/Store";
import {
    elementToModel,
    ImageArea,
    modelsActions,
    useElementContext
} from "@/entities/element";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
import { useDispatch } from "react-redux";

export const AddImage = () => {
    const context = useElementContext();
    const dropdown = useDropdownContext();
    const dispatch = useDispatch<AppDispath>();
    const clickHandle = () => {
        const textArea = ImageArea();
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