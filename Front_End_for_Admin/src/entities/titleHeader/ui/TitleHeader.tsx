import styles from './styles/TitleHeader.module.css'
import { useSelector } from 'react-redux';
import { selectOpenedPost } from '@/entities/postState/model/slice/openedPost/selectors';
import { getFormattedDate } from '@/shared/lib/helpers/getFormattedDate';
import { useTitleHeaderContext } from '../lib/context/Context';

export const TitleHeader = ({ children }) => {
    const context = useTitleHeaderContext();
    const creatingDate = new Date(context);
    const formattedDate = getFormattedDate(creatingDate);

    return (
        <div className={styles.header_title}>
            {children}
            <span>{formattedDate}</span>
        </div>
    )
}