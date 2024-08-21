import { UserForm } from "@/shared/ui/userForm"
import styles from './styles/SignupForm.module.css'

export const SignupForm = () => {
    return (
        <div>
            <span className={styles.name}>Sign Up</span>
            <UserForm></UserForm>
        </div>
    )
}