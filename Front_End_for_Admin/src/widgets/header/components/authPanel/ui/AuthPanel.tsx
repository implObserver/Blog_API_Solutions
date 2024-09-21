import { selectUserServices, UserPreview } from "@/entities/user"
import { Logout } from "@/features/logout";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styles from './styles/AuthPanel.module.css'

export const AuthPanel = () => {
    const user = useSelector(selectUserServices).user;

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
        console.log(user.profile.name)
        const username = user.profile.name !== null ? user.profile.name : user.email;
        return (
            <div className={styles.panel_auth}>
                <span>{username}</span>
                <div className={styles.wrapper_preview}>
                    <UserPreview></UserPreview>
                </div>
                <Logout>
                    <button className={styles.button}>Logout</button>
                </Logout>
            </div>
        )
    }
}