import { AppDispath } from "@/app/model/store/Store"
import { modelsActions, useElementContext } from "@/entities/element";
import { useDropdownContext } from "@/shared/ui/dropdownElement";
import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch } from "react-redux";

export const ClickToRemoveElement = () => {
    const dispath = useDispatch<AppDispath>();
    const context = useElementContext();
    const dropdown = useDropdownContext();
    const clickHandle = () => {
        dispath(modelsActions.removeModel(context.model));
        dropdown.canvas.toggle();
    }

    return (
        <div onClick={clickHandle}>
            <MinusButton></MinusButton>
        </div>
    )
}