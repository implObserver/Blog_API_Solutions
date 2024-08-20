import { Greeting } from '@/widgets/greeting'
import styles from './styles/MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Greeting></Greeting>
        </div>
    )
}