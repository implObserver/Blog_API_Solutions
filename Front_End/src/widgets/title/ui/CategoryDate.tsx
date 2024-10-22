import { TitleHeader, TitleHeaderContext } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { Tag, TagContext } from '@/shared/ui/tag'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPosts } from '@/entities/postState'
import { PostFilterContext, PostsFilter } from '@/features/postsFilter'
import { Author } from '../component/author'

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