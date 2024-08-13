import { useElementListContext } from '@/entities/elementList/lib/context/Context';
import styles from './styles/Image.module.css'

export const Image = () => {
    const context = useElementListContext();
    return (
        <div className={styles.inner}>
            {context.image}
        </div>
    )
}