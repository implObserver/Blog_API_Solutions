import { store } from "@/app/model/store/Store";
import { elementsActions } from "@/entities/element";
import { elementsToModels } from "@/entities/element/lib/helper/ElementsToModels";

export const updateElement = (context: CanvasElement) => {
    console.log(context)
    const updateContext: UpdateElement = {
        newModel: elementsToModels([context.elementContext])[0],
        model: context.model,
    }
    store.dispatch(elementsActions.updateElement(updateContext));
}
