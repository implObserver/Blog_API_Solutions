import { TitleHeader, TitleHeaderContext } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { useSelector } from 'react-redux'
import { selectOpenedPost } from '@/entities/postState'
import { Author } from '../components/author'
import { Tags } from '../components/tags'
import { PublishBox } from '../components/publishBox'

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