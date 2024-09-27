import { LoginWidget } from "@/widgets/login"
import styles from './styles/LoginPage.module.css'

export const LoginPage = () => {
    return (
        <div className={styles.login_page}>
            <LoginWidget></LoginWidget>
        </div>
    )
}