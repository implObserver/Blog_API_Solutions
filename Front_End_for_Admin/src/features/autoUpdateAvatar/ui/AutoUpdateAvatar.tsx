import { UserAvatar } from "@/entities/userAvatar"
import { Link } from "react-router-dom"
import styles from './styles/UpdateAvatar.module.css'
import { useEffect, useState } from "react";
import { AvatarContext } from "@/shared/ui/avatar";
import { getAvatar, useUserAvatarContext } from "../lib";
import { useAppDispatch } from "@/shared/lib";
import { servicesActions } from "@/entities/user";

const homeUrl = import.meta.env.VITE_CREATOR_URL;

export const AutoUpdateAvatar = () => {
    const services = useUserAvatarContext();
    const user = services.user;
    const isUpdate = services.isUpdating;
    const [avatar, setAvatar] = useState(null);
    const dispatch = useAppDispatch();

    const loadAvatar = async () => {
        console.log('ddddd')
        const avatar = await getAvatar();
        console.log(avatar)
        if (avatar === 401) {
            dispatch(servicesActions.reset());
        }
        setAvatar(URL.createObjectURL(avatar));
    }

    useEffect(() => {
        const resp = loadAvatar();
    }, [isUpdate]);

    const avatarContext: AvatarContextType = {
        image: avatar,
    };

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`${homeUrl}profile/${user.id}`}>
                <AvatarContext.Provider value={avatarContext}>
                    <UserAvatar></UserAvatar>
                </AvatarContext.Provider>
            </Link>
        </div>
    )
}