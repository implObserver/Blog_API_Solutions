import { logout } from "@/entities/user";
import styles from './styles/Logout.module.css'
import { useAppDispatch } from "@/shared/lib";

export const Logout = ({ children }) => {
    const dispatch = useAppDispatch();

    const clickHandle = () => {
        dispatch(logout());
    }

    return (
        <div className={styles.logout} onClick={clickHandle}>
            {children}
        </div>
    )
}