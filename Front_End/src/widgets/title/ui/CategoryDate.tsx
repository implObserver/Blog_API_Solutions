import { TitleHeader } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { Tag, TagContext } from '@/shared/ui/tag'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserServices } from '@/entities/user'
import { PostFilterContext } from '@/features/postsFilter/lib/context/Context'
import { PostsFilter } from '@/features/postsFilter/ui/PostsFilter'

export const CategoryDate = () => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const service = useSelector(selectUserServices);
    const user = service.user;
    const posts = user.posts;
    const post = posts.find(post => post.id === post_id);

    const postFilterContext: PostFilterType = {
        tag: post.tag,
        children: <Tag></Tag>,
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement;
        if (element.className.includes('tag')) {
            window.location.href = "http://localhost:5001/";
        }
    }

    if (!post) {
        return (
            <div>Нет доступа или поста не существует</div>
        )
    }
    return (
        <div onClick={handleClick} className={styles.title}>
            <TitleHeader>
                <TagContext.Provider value={post.tag}>
                    <PostFilterContext.Provider value={postFilterContext}>
                        <PostsFilter></PostsFilter>
                    </PostFilterContext.Provider>
                </TagContext.Provider>
            </TitleHeader>
        </div >
    )
}