import { Avatar, AvatarContext } from "@/shared/ui/avatar"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styles from './styles/Preview.module.css'
import { useEffect, useState } from "react";
import { selectUserServices } from "@/entities/user/model/slice/services/selectors";
import { getAvatar } from "@/entities/user/lib";

export const Preview = () => {
    const services = useSelector(selectUserServices);
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

    const avatarContext: AvatarContext = {
        imageUrl: avatar,
    };

    return (
        <div className={styles.container}>
            <AvatarContext.Provider value={avatarContext}>
                <Link className={styles.link} to={`/profile/${user.id}`}>
                    <Avatar></Avatar>
                </Link>
            </AvatarContext.Provider>
        </div>
    )
}