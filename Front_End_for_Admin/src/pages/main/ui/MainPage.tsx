import styles from './styles/MainPage.module.css'
import { Title } from '@/widgets/title'
import { Preview } from '@/widgets/preview'
import { Body } from '@/widgets/body'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Title></Title>
            <Preview></Preview>
            <Body></Body>
        </div>
    )
}