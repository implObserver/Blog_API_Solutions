import styles from './styles/TitleHeader.module.css'
import { useTitleHeaderContext } from '../lib/context/Context';
import { getFormattedDate } from '@/shared/lib';

export const TitleHeader = ({ children }) => {
    const date = useTitleHeaderContext();
    const postingDate = new Date(date);

    const formattedDate = getFormattedDate(postingDate);

    return (
        <div className={styles.header_title}>
            {children}
            <span>{formattedDate}</span>
        </div>
    )
}