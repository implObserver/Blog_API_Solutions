import { selectUserServices } from "@/entities/user/model/slice/services/selectors"
import { Avatar } from "@/shared/ui/avatar"
import { AvatarContext } from "@/shared/ui/avatar/lib/context/Context";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styles from './styles/Preview.module.css'
import { useEffect, useState } from "react";
import { AppDispath } from "@/app/model/store/Store";
import { getAvatar } from "@/entities/user/model/slice/services/thunks/get/getAvatar";

export const Preview = () => {
    const user = useSelector(selectUserServices).user;
    const avatar = useSelector(selectUserServices).avatar;
    const dispath = useDispatch<AppDispath>();
    console.log('avatar')
    useEffect(() => {
        if (avatar === null || avatar === undefined) {
            dispath(getAvatar());
        }
    }, [])

    const avatarContext: AvatarContextType = {
        image: avatar,
    }

    console.log(avatar)
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