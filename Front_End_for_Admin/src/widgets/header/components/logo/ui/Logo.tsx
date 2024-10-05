import { Link } from 'react-router-dom'
import styles from './styles/Logo.module.css'
import { useSelector } from 'react-redux'
import { selectUserServices } from '@/entities/user'

export const Logo = () => {
    const user = useSelector(selectUserServices).user;
    return (
        <div className={styles.logo}>
            <Link className={styles.link} to={`http://localhost:5001/`}>
                <h1 className={styles.h1}>p<span className={styles.letter}>o</span>st_add_</h1>
            </Link>
        </div>
    )
}