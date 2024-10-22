import { PostPreview, PostPreviewContext } from "@/entities/postPreview";
import { selectTag } from "@/entities/tag";
import { Line } from "@/shared/ui/line";
import { Tag } from "@/shared/ui/tag";
import { useSelector } from "react-redux";
import styles from './styles/ClassicShowcase.module.css'
import { selectPosts } from "@/entities/postState";
import { PostFilterContext, PostsFilter } from "@/features/postsFilter";

export const ClassicShowcase = () => {
    const tag = useSelector(selectTag).tag;
    const postsService = useSelector(selectPosts);
    const posts = postsService.posts;

    const fill = () => {
        let counter = 0;
        return posts.map((post, index) => {
            if (tag === post.tag || tag === 'All') {
                ++counter;
                if (counter > 3) {
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
                        type: 'classic',
                    };

                    return (
                        <PostPreviewContext.Provider value={postPreviewContext} key={`${post.id}_${post.tag}`}>
                            <PostPreview />
                        </PostPreviewContext.Provider>
                    );
                }
            }
        });
    };

    return (
        <div>
            <div>
                <Line text={'Recent Posts'}></Line>
            </div>
            <div className={styles.container}>
                {fill()}
            </div>
        </div >
    )
};