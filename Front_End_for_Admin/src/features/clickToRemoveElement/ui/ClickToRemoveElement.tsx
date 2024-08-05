import { AppDispath, selectors } from "@/app/model/store/Store"
import { focusActions, modelsActions } from "@/entities/element";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { MinusButton } from "@/shared/ui/minusButton"
import { useDispatch, useSelector } from "react-redux";

export const ClickToRemoveElement = () => {
    const dispath = useDispatch<AppDispath>();
    const context = useElementContext();
    const clickHandle = () => {
        console.log('wtf')
        dispath(modelsActions.removeModel(context.model));
        //if (context.) {
            //dispath(focusActions.setFocus(context.containerContext.index - 1))
        //}
        //context.canvasUpdate.toggle();
    }

    return (
        <div onClick={clickHandle}>
            <MinusButton></MinusButton>
        </div>
    )
}