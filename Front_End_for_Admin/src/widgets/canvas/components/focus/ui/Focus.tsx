import { AppDispath } from "@/app/model/store/Store";
import { focusActions, selectModels } from "@/entities/element";
import { useDispatch, useSelector } from "react-redux";
import { useFocusContext } from "../lib/context/Context";

export const Focus = () => {
    const dispatch = useDispatch<AppDispath>();
    const context = useFocusContext();
    const select = useSelector(selectModels);
    
   
    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            dispatch(focusActions.setFocus(context.containerContext.index + 1))
            context.canvasUpdate.toggle();
        }
    }

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as SVGAnimateElement;
        if (element.tagName === 'svg') {
            const className = element.classList.value;
            if (className.includes('minus')) {
                dispatch(focusActions.setFocus(context.containerContext.index - 1));
                context.canvasUpdate.toggle();
            }
        }
    }

    return (
        <div>

        </div>
    )
}