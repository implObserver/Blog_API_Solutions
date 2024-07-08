import { TitleHeader } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { CheckTag } from '@/features/checkTag'
import { TextArea } from '@/shared/ui/textArea'
import { TitleName } from '@/entities/titleName'

export const Title = () => {
    return (
        <div className={styles.title}>
            <TitleHeader>
                <CheckTag></CheckTag>
            </TitleHeader>
            <TitleName></TitleName>
            <span>Author: Observer</span>
        </div>
    )
}