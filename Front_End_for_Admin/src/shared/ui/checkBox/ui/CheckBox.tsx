import { useCheckBoxContext } from '../lib/context/Context'
import styles from './styles/CheckBox.module.css'

export const CheckBox = () => {
    const checked = useCheckBoxContext();

    return (
        <div className={styles.checkbox}>
            <input type="checkbox" defaultChecked={checked} />
        </div>
    )
}