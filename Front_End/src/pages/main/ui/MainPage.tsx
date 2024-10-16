import { FastAuth } from '@/features/fastAuth/ui/FastAuth'
import styles from './styles/MainPage.module.css'
import { Pposts } from '@/widgets/posts/ui/Posts'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Pposts></Pposts>
            <FastAuth></FastAuth>
        </div>
    )
}