import { store } from "@/app/model/store/Store"
import { backupsActions } from "@/entities/postState/model/slice/backups/slice";
import { postsActions } from "../../model/slice/posts/slice";
import { updateModelsOfPost } from "../../model/slice/openedPost/thunks/update/updateModelsOfPost";
import { updatePost } from "../../model/slice/posts/thunks/update/updatePost";

export const processBackups = async () => {
    const backups = store.getState().backups.backups;
    console.log(backups)
    for (const backup of backups) {
        store.dispatch(backupsActions.removeBackup(backup));
        store.dispatch(updatePost(backup));
    }
};