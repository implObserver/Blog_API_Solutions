import { Link } from 'react-router-dom'
import styles from './styles/Body.module.css'
import { PostsFilter } from '@/features/postsFilter/ui/PostsFilter'
import { PostFilterContext } from '@/features/postsFilter/lib/context/Context'
const homeUrl = import.meta.env.VITE_BLOG_URL;
const creatorUrl = import.meta.env.VITE_CREATOR_URL;

const renderFilterLink = (tag: string) => (
    <Link key={tag} className={styles.link} to=''>
        <PostFilterContext.Provider value={{ tag, children: <span>{tag}</span> }}>
            <PostsFilter />
        </PostFilterContext.Provider>
    </Link>
);

export const Body = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Link className={styles.link} to={homeUrl}>
                    b<span className={styles.letter}>l</span>og_
                </Link>
                /
                <Link className={styles.link} to={creatorUrl}>
                    p<span className={styles.letter}>o</span>st_add_
                </Link>
            </div>
            <div className={styles.pages}>
                Страницы
                <div className={styles.links}>
                    <Link className={styles.link} to={creatorUrl}>Post creater</Link>
                    <Link className={styles.link} to={homeUrl}>Blog</Link>
                </div>
            </div>
            <div className={styles.categories}>
                Категории
                <div className={styles.links}>
                    {['All', 'Travel', 'Sport', 'Tech', 'Books'].map(tag => renderFilterLink(tag))}
                </div>
            </div>
            <div className={styles.contacts}>
                Контакты
                <Link className={styles.link} to='https://github.com/implObserver'>Observer</Link>
            </div>
        </div>
    );
};