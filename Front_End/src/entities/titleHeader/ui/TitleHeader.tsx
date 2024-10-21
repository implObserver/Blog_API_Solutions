import styles from './styles/TitleHeader.module.css'
import { useTitleHeaderContext } from '../lib/context/Context';

export const TitleHeader = ({ children }) => {
    const date = useTitleHeaderContext();
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