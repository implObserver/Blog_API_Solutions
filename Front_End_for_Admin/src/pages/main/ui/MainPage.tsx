import { Header } from '@/widgets/header'
import styles from './styles/MainPage.module.css'
import { useSelector } from 'react-redux'
import { selectUserServices } from '@/entities/user'
import { CodeArea } from '@/shared/ui/codeArea'

export const MainPage = () => {
    const user = useSelector(selectUserServices).user;
    return (
        <div className={styles.page__main}>
            <Header></Header>
        </div>
    )
}