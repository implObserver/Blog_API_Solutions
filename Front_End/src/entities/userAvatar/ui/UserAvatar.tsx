import { Avatar, AvatarContext } from "@/shared/ui/avatar"
import { Link } from "react-router-dom";
import styles from './styles/Preview.module.css'
import { useEffect, useState } from "react";
import { getAvatar, useUserAvatarContext } from "../lib";

const homeUrl = import.meta.env.VITE_CREATOR_URL;

export const UserAvatar = () => {
    const services = useUserAvatarContext();
    const user = services.user;
    const isUpdate = services.isUpdating;
    const [avatar, setAvatar] = useState(null);

    const loadAvatar = async () => {
        const avatar = await getAvatar();
        setAvatar(URL.createObjectURL(avatar));
    }

    useEffect(() => {
        loadAvatar();
    }, [isUpdate]);

    const avatarContext = {
        image: avatar,
    };

    return (
        <div className={styles.container}>
            <AvatarContext.Provider value={avatarContext}>
                <Link className={styles.link} to={`${homeUrl}profile/${user.id}`}>
                    <Avatar></Avatar>
                </Link>
            </AvatarContext.Provider>
        </div>
    )
}