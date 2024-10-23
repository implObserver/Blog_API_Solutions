import { UpdateOfProfile } from "@/features/updateOfProfile"
import styles from './styles/DataOfProfile.module.css'
import { getUserServicesResponseIds } from "@/entities/user";
import { useMemo } from "react";
import { NotificationDistributor } from "@/features/notificationDistributor";

export const DataOfProfile = () => {
    const ids = useMemo(() => getUserServicesResponseIds(), []);

    return (
        <div className={styles.data_of_profile}>
            <UpdateOfProfile></UpdateOfProfile>
            <NotificationDistributor ids={ids} />
        </div>
    )
}