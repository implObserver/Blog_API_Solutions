import { selectAuth } from "@/entities/user"
import { Logout } from "@/features/logout";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styles from './styles/AuthPanel.module.css'

export const AuthPanel = () => {
    const user = useSelector(selectAuth).user;

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
                <span>Hello {user.name}</span>
                <Logout>
                    <button>Logout</button>
                </Logout>
            </div>
        )
    }
}