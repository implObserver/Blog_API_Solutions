import { useEffect } from "react";
import styles from './styles/Backup.module.css'
import { getBackups, getVirtualPost, useAppDispatch } from "@/shared/lib";
import { backupsActions, updatePost } from "@/entities/postState";

export const Backup = ({ children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleUnload = () => {
            const virtualPost = getVirtualPost();
            if (virtualPost) {
                dispatch(backupsActions.addBackup(virtualPost));
                const backups = getBackups();
                for (const backup of backups) {
                    dispatch(updatePost(backup));
                    dispatch(backupsActions.removeBackup(backup));
                }
            }
        };
        window.addEventListener('beforeunload', handleUnload);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [])
    return (
        <div className={styles.backup}>
            {children}
        </div>
    )
}