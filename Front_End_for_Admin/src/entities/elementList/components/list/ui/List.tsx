import { useElementListContext } from '@/entities/elementList/lib/context/Context';
import styles from './styles/List.module.css'

export const List = () => {
    const context = useElementListContext();
    return (
        <div className={styles.inner}>
            {context.list_header}
        </div>
    )
}