import { UserForm } from "@/shared/ui/userForm"
import styles from './styles/LoginForm.module.css'

export const LoginForm = () => {
    return (
        <div>
            <span className={styles.name}>Log In</span>
            <UserForm></UserForm>
        </div>
    )
}