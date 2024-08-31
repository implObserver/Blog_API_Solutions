import { selectUserServices } from "@/entities/user/model/slice/services/selectors"
import { Avatar } from "@/shared/ui/avatar"
import { AvatarContext } from "@/shared/ui/avatar/lib/context/Context";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styles from './styles/Preview.module.css'
import { useEffect, useState } from "react";
import { AppDispath } from "@/app/model/store/Store";
import { getAvatar } from "@/entities/user/model/slice/services/thunks/get/getAvatar";
import { base64ToFile } from "@/shared/lib";

export const Preview = () => {
    const user = useSelector(selectUserServices).user;
    const base64 = useSelector(selectUserServices).avatar;
    const file = base64 ? base64ToFile(base64, 'avatar') : null;

    const dispatch = useDispatch<AppDispath>();
    const avatarURL = file ? URL.createObjectURL(file) : null;
 
    useEffect(() => {
        if (!file) {
            dispatch(getAvatar());
        }
    }, []);

    const avatarContext = {
        image: avatarURL,
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