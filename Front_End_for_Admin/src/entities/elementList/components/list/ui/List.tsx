import { useElementListContext } from '@/entities/elementList/lib';
import styles from './styles/List.module.css'

export const List = () => {
    const context = useElementListContext();
    return (
        <div className={styles.inner}>
            {context.list_header}
        </div>
    )
}