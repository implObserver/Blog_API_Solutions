import { formattedToday } from '@/shared/lib/helpers/getCurrentDate';
import styles from './styles/TitleHeader.module.css'

export const TitleHeader = ({ children }) => {
    const date = new Date();
    console.log(date);
    return (
        <div className={styles.header_title}>
            {children}
            <span>{formattedToday}</span>
        </div>
    )
}