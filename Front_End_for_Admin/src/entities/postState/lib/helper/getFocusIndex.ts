import { store } from "@/app/model/store/Store"

export const getFocusIndex = () => {
    const index = store.getState().focus.index;
    return index;
}