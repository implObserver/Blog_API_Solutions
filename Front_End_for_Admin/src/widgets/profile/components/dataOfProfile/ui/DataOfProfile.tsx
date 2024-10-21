import { UpdateOfProfile } from "@/features/updateOfProfile"
import styles from './styles/DataOfProfile.module.css'
import { servicesActions } from "@/entities/user";
import { useEffect } from "react";
import { NotificationDistributor } from "@/features/notificationDistributor/ui/NotificationDistributor";
import { useAppDispatch } from "@/shared/lib";

export const DataOfProfile = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(servicesActions.clearErrors());
    }, [])

    return (
        <div className={styles.data_of_profile}>
            <UpdateOfProfile></UpdateOfProfile>
            <NotificationDistributor />
        </div>
    )
}