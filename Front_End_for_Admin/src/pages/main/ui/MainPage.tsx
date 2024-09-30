import { Header } from '@/widgets/header'
import styles from './styles/MainPage.module.css'
import { useSelector } from 'react-redux'
import { selectUserServices } from '@/entities/user'
import { FastAuth } from '@/features/fastAuth/ui/FastAuth'

export const MainPage = () => {
    //localStorage.clear()
    console.log('dd')
    return (
        <div className={styles.page__main}>
            <FastAuth></FastAuth>
        </div>
    )
}