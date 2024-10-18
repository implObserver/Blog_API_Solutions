import { formattedToday } from '@/shared/lib';
import styles from './styles/TitleHeader.module.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserServices } from '@/entities/user';
import { selectPosts } from '@/entities/postState/model/slice/posts/selectors';

export const TitleHeader = ({ children }) => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const posts = useSelector(selectPosts).posts;
    const post = posts.find(post => post.id === post_id);
    if (!post) {
        return (
            <div></div>
        )
    }

    const date = post.postingDate;
    const postingDate = new Date(date);

    // Форматирование даты
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(postingDate);

    return (
        <div className={styles.header_title}>
            {children}
            <span>{formattedDate}</span>
        </div>
    )
}