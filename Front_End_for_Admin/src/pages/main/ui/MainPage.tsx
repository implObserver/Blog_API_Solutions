import styles from './styles/MainPage.module.css'
import { Canvas } from '@/widgets/canvas'
import { CategoryDate } from '@/widgets/title'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <CategoryDate></CategoryDate>
            <Canvas></Canvas>
        </div>
    )
}