import { AppDispath } from "@/app/model/store/Store";
import { modelsActions } from "@/entities/element";
import { elementToModel } from "@/entities/element/lib/helper/ElementsToModels";
import { TextArea } from "@/entities/element/lib/helper/ElementValue";
import { useContainerContext } from "@/features/containerOS/lib/context/Context";
import { useDispatch } from "react-redux";

export const Add = ({ children }) => {
    const context = useContainerContext();
    const model = context.containerContext.model;
    const dispath = useDispatch<AppDispath>();

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'Enter') {
            e.preventDefault();
            const textArea = TextArea();
            const newModel = elementToModel(textArea);
            const elementContext: UpdateElement = {
                model,
                newModel,
            }
            dispath(modelsActions.addModel(elementContext));
        }
    }

    return (
        <div onKeyDown={keyDownHandle}>
            {children}
        </div>
    )
}