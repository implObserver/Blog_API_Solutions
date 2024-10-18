import { AppDispath } from "@/app/model/store/Store";
import { getVirtualPost } from "@/entities/element/lib/helper/getVirtualPost";
import { processBackups } from "@/entities/postState/lib/helper/processBackups";
import { backupsActions } from "@/entities/postState/model/slice/backups/slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from '../styles/App.module.css'

export const Backup = ({ children }) => {
    const dispatch = useDispatch<AppDispath>();

    useEffect(() => {
        const handleUnload = () => {
            const virtualPost = getVirtualPost();
            if (virtualPost) {
                dispatch(backupsActions.addBackup(virtualPost));
                processBackups();
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