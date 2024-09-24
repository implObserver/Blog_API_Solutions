import { UpdateOfProfile } from "@/features/updateOfProfile"
import styles from './styles/DataOfProfile.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { AppDispath } from "@/app/model/store/Store";
import { useEffect } from "react";

export const DataOfProfile = () => {
    const services = useSelector(selectUserServices);
    const dispatch = useDispatch<AppDispath>();

    useEffect(() => {
        dispatch(servicesActions.clearErrors());
    }, [])

    return (
        <div className={styles.data_of_profile}>
            <UpdateOfProfile></UpdateOfProfile>
            <span>{services.error ? services.error : ''}</span>
        </div>
    )
}