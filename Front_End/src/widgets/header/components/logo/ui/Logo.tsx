import { Link } from 'react-router-dom'
import styles from './styles/Logo.module.css'

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link className={styles.link} to={`/`}>
                <h1 className={styles.h1}>b<span className={styles.letter}>l</span>og_</h1>
            </Link>
        </div>
    )
}