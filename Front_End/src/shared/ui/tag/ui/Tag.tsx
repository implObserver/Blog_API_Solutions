import { useTagContext } from '../lib/context/Context'
import styles from './styles/Tag.module.css'

export const Tag = () => {
    const name = useTagContext();
    return (
        <div className={styles.tag}>
            {name}
        </div>
    )
}