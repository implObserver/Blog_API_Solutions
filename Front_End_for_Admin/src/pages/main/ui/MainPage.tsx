import { Greeting } from '@/widgets/greeting/ui/Greeting'
import styles from './styles/MainPage.module.css'
import { Link } from 'react-router-dom'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Greeting></Greeting>
        </div>
    )
}