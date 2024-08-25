import { selectUserServices, UserPreview } from "@/entities/user"
import { Logout } from "@/features/logout";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styles from './styles/AuthPanel.module.css'

export const AuthPanel = () => {
    const user = useSelector(selectUserServices).user;

    if (user.name === 'visitor')
        return (
            <div className={styles.panel_auth}>
                <Link to={'/login'}>
                    <button>Login</button>
                </Link>
                <Link to={'/signup'}>
                    <button>Sign Up</button>
                </Link>
            </div>
        )
    else {
        return (
            <div className={styles.panel_auth}>
                <span>{user.name}</span>
                <div className={styles.wrapper_preview}>
                    <UserPreview></UserPreview>
                </div>
                <Logout>
                    <button>Logout</button>
                </Logout>
            </div>
        )
    }
}