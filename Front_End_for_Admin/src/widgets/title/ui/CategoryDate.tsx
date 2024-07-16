import { TitleHeader } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { CheckTag } from '@/features/checkTag'
import { TextArea } from '@/shared/ui/textArea'
import { TitleName } from '@/entities/titleName'

export const CategoryDate = () => {
    return (
        <div className={styles.title}>
            <TitleHeader>
                <CheckTag></CheckTag>
            </TitleHeader>
        </div>
    )
}