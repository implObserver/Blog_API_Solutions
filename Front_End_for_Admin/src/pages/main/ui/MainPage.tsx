import styles from './styles/MainPage.module.css'
import { Header } from '@/widgets/header/ui/Header'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Header></Header>
        </div>
    )
}