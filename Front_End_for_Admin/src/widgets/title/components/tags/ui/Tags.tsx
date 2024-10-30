import { CheckTag } from "@/features/checkTag"
import styles from './styles/Tags.module.css'

export const Tags = () => {
    return (
        <div className={styles.tags}>
            <CheckTag></CheckTag>
        </div>
    )
}