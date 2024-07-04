import { Title } from '@/widgets/title'
import styles from './styles/MainPage.module.css'
import { Preview } from '@/widgets/preview'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Title></Title>
            <Preview></Preview>
        </div>
    )
}