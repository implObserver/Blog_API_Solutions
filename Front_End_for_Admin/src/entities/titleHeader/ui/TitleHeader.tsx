import { formattedToday } from '@/shared/lib';
import styles from './styles/TitleHeader.module.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserServices } from '@/entities/user';
import { selectOpenedPost } from '@/entities/postState/model/slice/openedPost/selectors';
import { getFormattedDate } from '@/shared/lib/helpers/getFormattedDate';

export const TitleHeader = ({ children }) => {
    const post = useSelector(selectOpenedPost).openedPost;
    const date = post.postingDate;
    const creatingDate = new Date(date);
    const formattedDate = getFormattedDate(creatingDate);

    return (
        <div className={styles.header_title}>
            {children}
            <span>{formattedDate}</span>
        </div>
    )
}