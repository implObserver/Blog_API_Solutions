import { Access } from "@/entities/access"
import styles from './styles/SuccVerifyPage.module.css'

export const SuccVerifyPage = () => {
    const message = 'Почтовый ящик успешно подтвержден. Пожалуйста, авторизуйтесь!'
    return (
        <div className={styles.page}>
            <Access message={message} />
        </div>
    )
}