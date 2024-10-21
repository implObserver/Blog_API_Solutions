import { dbPromise } from "@/app/model/store/indexedDB";

export const useIndexedDb = () => {
    return dbPromise;
}