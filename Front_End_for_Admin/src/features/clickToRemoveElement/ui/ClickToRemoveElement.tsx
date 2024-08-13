import { AppDispath } from "@/app/model/store/Store"
import { modelsActions } from "@/entities/element";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { useDropdownContext } from "@/shared/ui/dropdownElement/lib/context/Context.";
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