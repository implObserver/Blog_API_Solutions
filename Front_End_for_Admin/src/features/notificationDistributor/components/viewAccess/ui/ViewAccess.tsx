import { isAccess} from "@/features/notificationDistributor/lib/helper/getStatuses";
import { statusesActions } from "@/features/notificationDistributor/model/slice/statuses/slice";
import { useAppDispatch } from "@/shared/lib";
import { useEffect } from "react";
import styles from './styles/ViewAccess.module.css'
import { Access } from "@/entities/access";

export const ViewAccess = ({ access }) => {
    const dispatch = useAppDispatch();
    const status = access.status;
    const message = access.message;

    useEffect(() => {
        const handleUnload = () => {
            dispatch(statusesActions.removeAccess(access));
        };
        window.addEventListener('beforeunload', handleUnload);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [])

    const NotificationComponent = isAccess(status)
        ? Access
        : null;

    return NotificationComponent ? (
        <div className={styles.container}>
            <NotificationComponent message={message} />
        </div>

    ) : null;
}