import { TextArea } from '@/shared/ui/textArea'
import styles from './styles/TitleName.module.css'

export const TitleName = () => {
    return (
        <div className={styles.title_name}>
            <TextArea text={'Enter name of this post'} maxLength={100}></TextArea>
        </div>
    )
}