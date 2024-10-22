import styles from './styles/MainPage.module.css'
import { Posts } from '@/widgets/posts/ui/Posts'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Posts></Posts>
        </div>
    )
}