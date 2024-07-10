import styles from './styles/MainPage.module.css'
import { Title } from '@/widgets/title'
import { Preview } from '@/widgets/preview'
import { ElementsContainer } from '@/widgets/elementsContainer'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Title></Title>
            <Preview></Preview>
            <ElementsContainer></ElementsContainer>
        </div>
    )
}