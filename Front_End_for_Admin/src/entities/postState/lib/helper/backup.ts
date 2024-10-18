import { store } from "@/app/model/store/Store"
import { openedPostActions } from "../../model/slice/openedPost/slice";
import { backupsActions } from "../../model/slice/backups/slice";

export const getBackup = (snapshot: Snapshot) => {
    store.dispatch(openedPostActions.updateModels(snapshot));
    const post = store.getState().openedPost.openedPost;
    return post
}