import { useElementListContext } from '@/entities/elementList/lib/context/Context';
import styles from './styles/Code.module.css'

export const Code = () => {
    const context = useElementListContext();
    return (
        <div className={styles.inner}>
            {context.code}
        </div>
    )
}