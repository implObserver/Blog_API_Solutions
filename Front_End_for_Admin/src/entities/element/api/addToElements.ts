import { actions, store } from "@/app/model/store/Store";

export const addToElements = (element: ElementModel, index: number) => {
    store.dispatch(actions.elementsActions.addElementToIndex(element));
    store.dispatch(actions.elementsActions.saveToLocalStorage());
}