import { Header } from '@/widgets/header'
import styles from './styles/MainPage.module.css'
import { useSelector } from 'react-redux'
import { selectUserServices } from '@/entities/user'

export const MainPage = () => {
    const user = useSelector(selectUserServices).user;
    return (
        <div className={styles.page__main}>
            <Header></Header>
        </div>
    )
}