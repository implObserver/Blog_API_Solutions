import { TitleHeader } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { Tags } from '../components/tags/ui/Tags'
import { Tag, TagContext } from '@/shared/ui/tag'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserServices } from '@/entities/user'

export const CategoryDate = () => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const service = useSelector(selectUserServices);
    const user = service.user;
    const posts = user.posts;
    const post = posts.find(post => post.id === post_id);
    if (!post) {
        return (
            <div>Нет доступа или поста не существует</div>
        )
    }
    return (
        <div className={styles.title}>
            <TitleHeader>
                <TagContext.Provider value={post.tag}>
                    <Tag></Tag>
                </TagContext.Provider>
            </TitleHeader>
        </div >
    )
}