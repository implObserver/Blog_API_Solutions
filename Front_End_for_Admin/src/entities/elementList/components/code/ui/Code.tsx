import { useElementListContext } from '@/entities/elementList/lib';
import styles from './styles/Code.module.css'

export const Code = () => {
    const context = useElementListContext();
    return (
        <div className={styles.inner}>
            {context.code}
        </div>
    )
}