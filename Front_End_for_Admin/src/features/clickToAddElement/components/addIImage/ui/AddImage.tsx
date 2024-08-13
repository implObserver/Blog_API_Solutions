import { AppDispath } from "@/app/model/store/Store";
import { modelsActions } from "@/entities/element";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { elementToModel } from "@/entities/element/lib/helper/ElementsToModels";
import { ImageArea } from "@/entities/element/lib/helper/modelsOfElements";
import { useDropdownContext } from "@/shared/ui/dropdownElement/lib/context/Context.";
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