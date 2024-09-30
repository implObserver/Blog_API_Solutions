import { SignupWidget } from "@/widgets/signup"
import styles from './styles/SignupPage.module.css'

export const SignupPage = () => {
    return (
        <div className={styles.signup_page}>
            <SignupWidget></SignupWidget>
        </div>
    )
}