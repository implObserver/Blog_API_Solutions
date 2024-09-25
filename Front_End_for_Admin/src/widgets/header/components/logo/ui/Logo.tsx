import { Link } from 'react-router-dom'
import styles from './styles/Logo.module.css'

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link className={styles.link} to={`/`}>
                <h1>p<span className={styles.letter}>o</span>st_add_</h1>
            </Link>
        </div>
    )
}