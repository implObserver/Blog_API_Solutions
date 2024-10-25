import { selectUserServices } from "@/entities/user"
import { Logout } from "../../../../../features/logout";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styles from './styles/AuthPanel.module.css'
import { UserAvatarContext } from "@/features/autoUpdateAvatar/lib";
import { AutoUpdateAvatar } from "@/features/autoUpdateAvatar";

export const AuthPanel = () => {
    const service = useSelector(selectUserServices);
    const user = service.user;
    if (user === null)
        return (
            <div className={styles.panel_auth}>
                <Link to={'/login'}>
                    <button className={styles.button}>Login</button>
                </Link>
                <Link to={'/signup'}>
                    <button className={styles.button}>Sign Up</button>
                </Link>
            </div>
        )
    else {
        return (
            <div className={styles.panel_auth}>
                <span>{user.username}</span>
                <div className={styles.wrapper_preview}>
                    <UserAvatarContext.Provider value={service}>
                        <AutoUpdateAvatar />
                    </UserAvatarContext.Provider>
                </div>
                <Logout>
                    <button className={styles.button}>Logout</button>
                </Logout>
            </div>
        )
    }
}