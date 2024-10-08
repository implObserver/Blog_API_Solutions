import { AppDispath } from "@/app/model/store/Store";
import { logout } from "@/entities/user";
import { useDispatch } from "react-redux";
import styles from './styles/Logout.module.css'

export const Logout = ({ children }) => {
    const dispath = useDispatch<AppDispath>();

    const clickHandle = () => {
        dispath(logout());
    }

    return (
        <div className={styles.logout} onClick={clickHandle}>
            {children}
        </div>
    )
}