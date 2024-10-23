import { Link } from 'react-router-dom'
import styles from './styles/Body.module.css'

const blogUrl = import.meta.env.VITE_BLOG_URL;
const homeUrl = import.meta.env.VITE_CREATOR_URL;
export const Body = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Link className={styles.link} to={blogUrl}>
                    b<span className={styles.letter}>l</span>og_
                </Link >
                /
                <Link className={styles.link} to={homeUrl}>
                    p<span className={styles.letter}>o</span>st_add_
                </Link >
            </div>
            <div className={styles.pages}>
                Страницы
                <div className={styles.links}>
                    <Link className={styles.link} to={homeUrl}>
                        Post creator
                    </Link >
                    <Link className={styles.link} to={blogUrl}>
                        Blog
                    </Link >
                </div>
            </div>
            <div className={styles.contacts}>
                Контакты
                <Link className={styles.link} to='https://github.com/implObserver'>
                    Observer
                </Link >
            </div>
        </div>
    )
}