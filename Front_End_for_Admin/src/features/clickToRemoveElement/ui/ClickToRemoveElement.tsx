import { AppDispath, selectors } from "@/app/model/store/Store"
import { elementsActions } from "@/entities/element";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch, useSelector } from "react-redux";

export const ClickToRemoveElement = () => {
    const dispath = useDispatch<AppDispath>();
    const context = useElementContext();
    const clickHandle = () => {
        console.log(context.elementContext.index)
        dispath(elementsActions.removeElement(context.elementContext.index));
    }

    return (
        <div onClick={clickHandle}>
            <MinusButton></MinusButton>
        </div>
    )
}