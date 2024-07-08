import { ElementsContainer } from '@/entities/elementsContainer'
import styles from './styles/Body.module.css'
import { ShowElementTypes } from '@/features/showElementTypes/ui/ShowElementTypes'

export const Body = () => {
    return (
        <div className={styles.body}>
            <ElementsContainer></ElementsContainer>
        </div>
    )
}