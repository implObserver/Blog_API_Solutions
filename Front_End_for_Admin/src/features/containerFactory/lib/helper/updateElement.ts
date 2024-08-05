import { store } from "@/app/model/store/Store";
import { modelsActions } from "@/entities/element";
import { elementsToModels } from "@/entities/element/lib/helper/ElementsToModels";

export const updateElement = (context: CanvasElement) => {
    const updateContext: UpdateElement = {
        newModel: elementsToModels([context.elementContext])[0],
        model: context.model,
    }
    store.dispatch(modelsActions.updateModel(updateContext));
}
