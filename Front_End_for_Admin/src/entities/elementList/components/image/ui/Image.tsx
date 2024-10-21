import { useElementListContext } from '@/entities/elementList/lib';
import styles from './styles/Image.module.css'

export const Image = () => {
    const context = useElementListContext();
    return (
        <div className={styles.inner}>
            {context.image}
        </div>
    )
}