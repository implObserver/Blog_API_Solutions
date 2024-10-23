import { Denied } from "@/entities/denied";
import { Error } from "@/entities/error";
import { isDenied, isError } from "@/features/notificationDistributor/lib/helper/getStatuses";
import { statusesActions } from "@/features/notificationDistributor/model/slice/statuses/slice";
import { useAppDispatch } from "@/shared/lib";
import { useEffect } from "react";
import styles from './styles/ViewError.module.css'

export const ViewError = ({ error }) => {
    const dispatch = useAppDispatch();
    const status = error.status;
    const message = error.message;

    useEffect(() => {
        const handleUnload = () => {
            dispatch(statusesActions.removeError(error));
        };
        window.addEventListener('beforeunload', handleUnload);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [])

    const NotificationComponent = isError(status)
        ? Error
        : isDenied(status)
            ? Denied
            : null;

    return NotificationComponent ? (
        <div className={styles.container}>
            <NotificationComponent message={message} />
        </div>

    ) : null;
}