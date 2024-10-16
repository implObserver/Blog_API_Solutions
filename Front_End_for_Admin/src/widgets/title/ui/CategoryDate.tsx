import { TitleHeader } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { Tags } from '../components/tags/ui/Tags'
import { PublishBox } from '../components/publishBox/ui/PublishBox'
import { Author } from '../components/author/ui/Author'

export const CategoryDate = () => {
    return (
        <div className={styles.title}>
            <div className={styles.container}>
                <Author></Author>
                <TitleHeader>
                    <Tags></Tags>
                </TitleHeader>
            </div>
            <PublishBox></PublishBox>
        </div >
    )
}