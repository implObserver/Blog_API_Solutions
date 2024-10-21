import { useElementListContext } from '@/entities/elementList/lib';
import styles from './styles/Text.module.css'

export const Text = () => {
    const context = useElementListContext();
    return (
        <div className={styles.inner}>
            {context.text}
        </div>
    )
}