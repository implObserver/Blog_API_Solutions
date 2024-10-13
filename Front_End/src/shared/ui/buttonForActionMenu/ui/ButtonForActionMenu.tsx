import styles from './styles/ButtonForActionMenu.module.css'

export const ButtonForActionMenu = () => {
    return (
        <div className={styles.button_custom}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    )
}