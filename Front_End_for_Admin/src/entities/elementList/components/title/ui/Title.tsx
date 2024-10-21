import { useElementListContext } from '@/entities/elementList/lib';
import styles from './styles/Title.module.css'

export const Title = () => {
    const context = useElementListContext();
    return (
        <div className={styles.inner}>
            {context.title}
        </div>
    )
}