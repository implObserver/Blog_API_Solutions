import { selectUserServices } from "@/entities/user"
import { Logout } from "@/features/logout";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styles from './styles/AuthPanel.module.css'
import { UserAvatar, UserAvatarContext } from "@/entities/userAvatar";

export const AuthPanel = () => {
    const service = useSelector(selectUserServices);
    const user: UserData = service.user;
    if (!user)
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
                        <UserAvatar></UserAvatar>
                    </UserAvatarContext.Provider>
                </div>
                <Logout>
                    <button className={styles.button}>Logout</button>
                </Logout>
            </div>
        )
    }
}