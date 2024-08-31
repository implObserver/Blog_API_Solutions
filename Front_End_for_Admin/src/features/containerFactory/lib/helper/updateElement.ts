import { store } from "@/app/model/store/Store";
import { modelsActions } from "@/entities/element";
import { elementsToModels } from "@/entities/element/lib/helper/ElementsToModels";
import { postsActions } from "@/entities/showcasePosts/model/slice/slice";
import { useLocation } from "react-router-dom";

export const updateElement = (context: CanvasElement, index: number) => {
    const updateContext: CellOfPost = {
        index,
        model: context.model,
        newModel: elementsToModels([context.elementContext])[0],
    }

    store.dispatch(postsActions.updateModel(updateContext));
}
