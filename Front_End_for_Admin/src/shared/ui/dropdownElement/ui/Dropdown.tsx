import styles from './styles/Dropdown.module.css'
import { useDropdownContext } from '../lib/context/Context.';

export const Dropdown = ({ children }) => {
    const status = useDropdownContext();
    console.log(status.state)
    return (
        <div className={styles.dropdown}>
            <div className={`
                ${styles.content} 
                ${status.state ? styles.open : styles.close}
                ${status.margin ? styles.margin : ''}`}
            >
                {children}
            </div>
        </div>
    )
}