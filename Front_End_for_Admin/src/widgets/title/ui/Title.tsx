import { TitleHeader } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { CheckTag } from '@/features/checkTag'
import { Input } from '@/shared/ui/input'

export const Title = () => {
    return (
        <div className={styles.title}>
            <TitleHeader>
                <CheckTag></CheckTag>
            </TitleHeader>
            <Input></Input>
            <span>Author: Observer</span>
        </div>
    )
}