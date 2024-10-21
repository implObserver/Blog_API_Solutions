import styles from './styles/TitleHeader.module.css'
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