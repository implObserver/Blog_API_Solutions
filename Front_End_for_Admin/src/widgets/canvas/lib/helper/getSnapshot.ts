import { store } from "@/app/model/store/Store"

export const getSnapshot = () => {
    const snapshot = store.getState().snapshot;
    return snapshot;
}