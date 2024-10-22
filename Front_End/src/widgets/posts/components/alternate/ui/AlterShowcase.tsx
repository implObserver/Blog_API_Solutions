import styles from './styles/AlterShowcase.module.css'
import { useSelector } from "react-redux";
import { selectTag } from "@/entities/tag";
import { Tag } from "@/shared/ui/tag";
import { PostPreview } from '@/entities/postPreview';
import { selectPosts } from '@/entities/postState';
import { PostFilterContext, PostsFilter } from '@/features/postsFilter';
import { PostPreviewContext } from '@/entities/postPreview/lib';


export const AlterShowcase = () => {
    const tag = useSelector(selectTag).tag;
    const posts = useSelector(selectPosts).posts;

    const fill = () => {
        let counter = 0;
        return posts.map((post, index) => {
            if (counter < 3) {
                if (tag === post.tag || tag === 'All') {
                    counter++;
                    const postFilterContext: PostFilterType = {
                        tag: post.tag,
                        children: <Tag></Tag>,
                    }
                    const postPreviewContext: PostPreviewContextType = {
                        post,
                        tag: <>
                            <PostFilterContext.Provider value={postFilterContext}>
                                <PostsFilter></PostsFilter>
                            </PostFilterContext.Provider>
                        </>,
                        type: 'alter',
                    };
                    return (
                        <PostPreviewContext.Provider value={postPreviewContext} key={post.id}>
                            <PostPreview></PostPreview>
                        </PostPreviewContext.Provider>
                    );
                }
            }
        });
    };

    return (
        <div className={styles.posts_alternate}>
            {fill()}
        </div>
    )
}