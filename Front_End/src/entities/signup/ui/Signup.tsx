import { SignupForm } from '@/shared/ui/signupForm'
import styles from './styles/Signup.module.css'

export const Signup = () => {
    return (
        <div>
            <span className={styles.name}>Sign Up</span>
            <SignupForm />
        </div>
    )
}