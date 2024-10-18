import { LoginForm } from '@/shared/ui/loginForm'
import styles from './styles/LoginForm.module.css'

export const Login = () => {
    return (
        <div>
            <span className={styles.name}>Log In</span>
            <LoginForm />
        </div>
    )
}