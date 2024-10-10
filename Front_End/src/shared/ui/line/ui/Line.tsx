import styles from './styles/Recent.module.css'

export const Line = ({ text }) => {
    return (
        <div className={styles.recent}>
            <div className={styles.recent_name}>
                {text}
            </div>
            <div className={styles.recent_line}>

            </div>
        </div>
    )
}