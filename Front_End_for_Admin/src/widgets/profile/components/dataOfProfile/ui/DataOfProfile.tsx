import { UpdateOfProfile } from "@/features/updateOfProfile"
import styles from './styles/DataOfProfile.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { AppDispath } from "@/app/model/store/Store";
import { useEffect } from "react";
import { Error } from "@/entities/error";
import { NotificationDestributor } from "@/features/notificationDestributor/ui/NotificationDestributor";

export const DataOfProfile = () => {
    const dispatch = useDispatch<AppDispath>();

    useEffect(() => {
        dispatch(servicesActions.clearErrors());
    }, [])

    return (
        <div className={styles.data_of_profile}>
            <UpdateOfProfile></UpdateOfProfile>
            <NotificationDestributor />
        </div>
    )
}