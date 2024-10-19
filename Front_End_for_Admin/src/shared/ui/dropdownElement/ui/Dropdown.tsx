import styles from './styles/Dropdown.module.css'
import { useDropdownContext } from '../lib/context/Context.';

export const Dropdown = ({ children }) => {
    const status = useDropdownContext();

    return (
        <div className={styles.dropdown}>
            <div className={`
                ${styles.content} 
                ${status.isOpen ? styles.open : styles.close}
                ${status.hasMargin ? styles.margin : ''}`}
            >
                {children}
            </div>
        </div>
    )
}