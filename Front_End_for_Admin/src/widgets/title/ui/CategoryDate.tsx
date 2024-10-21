import { TitleHeader } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { Tags } from '../components/tags/ui/Tags'
import { PublishBox } from '../components/publishBox/ui/PublishBox'
import { Author } from '../components/author/ui/Author'
import { useSelector } from 'react-redux'
import { TitleHeaderContext } from '@/entities/titleHeader/lib/context/Context'
import { selectOpenedPost } from '@/entities/postState/model/slice/openedPost/selectors'

export const CategoryDate = () => {
    const post = useSelector(selectOpenedPost).openedPost;

    const postingDate: Date = post.postingDate;
    return (
        <div className={styles.title}>
            <div className={styles.container}>
                <Author></Author>
                <TitleHeaderContext.Provider value={postingDate}>
                    <TitleHeader>
                        <Tags></Tags>
                    </TitleHeader>
                </TitleHeaderContext.Provider>
            </div>
            <PublishBox></PublishBox>
        </div >
    )
}