import { Link } from 'react-router-dom'
import styles from './styles/Logo.module.css'
import { useSelector } from 'react-redux'
import { selectUserServices } from '@/entities/user'

const blogUrl = import.meta.env.VITE_BLOG_URL;

export const Logo = () => {
    const user = useSelector(selectUserServices).user;
    return (
        <div className={styles.logo}>
            <Link className={styles.link} to={`${blogUrl}`}>
                <h1 className={styles.h1}>p<span className={styles.letter}>o</span>st_add_</h1>
            </Link>
        </div>
    )
}