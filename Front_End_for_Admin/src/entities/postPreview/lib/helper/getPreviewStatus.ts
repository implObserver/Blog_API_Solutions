import { store } from "@/app/model/store/Store"

export const getPreviewStatus = (code: string) => {
    const statuses = store.getState().previewStatuses.statuses;
    const status = statuses.find(status => status.code === code);
    return status;
}