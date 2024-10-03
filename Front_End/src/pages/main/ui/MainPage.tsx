import { FastAuth } from '@/features/fastAuth/ui/FastAuth'
import styles from './styles/MainPage.module.css'
import { Posts } from '@/widgets/posts'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Posts></Posts>
            <FastAuth></FastAuth>
        </div>
    )
}