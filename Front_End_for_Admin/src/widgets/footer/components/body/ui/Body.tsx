import { Link } from 'react-router-dom'
import styles from './styles/Body.module.css'

export const Body = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Link className={styles.link} to=''>
                    b<span className={styles.letter}>l</span>og_
                </Link >
                /
                <Link className={styles.link} to=''>
                    p<span className={styles.letter}>o</span>st_add_
                </Link >
            </div>
            <div className={styles.pages}>
                Страницы
                <div className={styles.links}>
                    <Link className={styles.link} to=''>
                        Post creater
                    </Link >
                    <Link className={styles.link} to=''>
                        Blog
                    </Link >
                </div>
            </div>
            <div className={styles.contacts}>
                Контакты
                <Link className={styles.link} to=''>
                    Observer
                </Link >
            </div>
        </div>
    )
}