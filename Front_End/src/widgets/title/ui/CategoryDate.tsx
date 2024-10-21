import { TitleHeader } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { Tag, TagContext } from '@/shared/ui/tag'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PostFilterContext } from '@/features/postsFilter/lib/context/Context'
import { PostsFilter } from '@/features/postsFilter/ui/PostsFilter'
import { selectPosts } from '@/entities/postState/model/slice/posts/selectors'
import { Author } from '../component/author/ui/Author'
import { TitleHeaderContext } from '@/entities/titleHeader/lib/context/Context'

export const CategoryDate = () => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const posts = useSelector(selectPosts).posts;
    const post = posts.find(post => post.id === post_id);

    const postFilterContext: PostFilterType = {
        tag: post.tag,
        children: <Tag></Tag>,
    }

    const postingDate: Date = post.postingDate;

    if (!post) {
        return (
            <div>Нет доступа или поста не существует</div>
        )
    }
    return (
        <div className={styles.title}>
            <Author></Author>
            <TitleHeaderContext.Provider value={postingDate}>
                <TitleHeader>
                    <TagContext.Provider value={post.tag}>
                        <PostFilterContext.Provider value={postFilterContext}>
                            <PostsFilter></PostsFilter>
                        </PostFilterContext.Provider>
                    </TagContext.Provider>
                </TitleHeader>
            </TitleHeaderContext.Provider>
        </div >
    )
}