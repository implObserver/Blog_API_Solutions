import { UpdateOfProfile } from "@/features/updateOfProfile"
import styles from './styles/DataOfProfile.module.css'
import { useDispatch } from "react-redux";
import { servicesActions } from "@/entities/user";
import { AppDispath } from "@/app/model/store/Store";
import { useEffect } from "react";
import { NotificationDistributor } from "@/features/notificationDistributor/ui/NotificationDistributor";

export const DataOfProfile = () => {
    const dispatch = useDispatch<AppDispath>();

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