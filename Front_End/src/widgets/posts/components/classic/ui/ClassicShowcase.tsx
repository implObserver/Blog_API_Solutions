import { AppDispath } from "@/app/model/store/Store";
import { PostPreview } from "@/entities/postPreview";
import { PostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { selectTag } from "@/entities/tag";
import { postsActions } from "@/entities/user";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";
import { getAllPosts } from "@/entities/postState/model/slice/posts/thunks/get/getAllPosts";
import { PostFilterContext } from "@/features/postsFilter/lib/context/Context";
import { PostsFilter } from "@/features/postsFilter/ui/PostsFilter";
import { Line } from "@/shared/ui/line";
import { Tag } from "@/shared/ui/tag";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/ClassicShowcase.module.css'
import { getPaginationPosts } from "@/entities/postState/model/slice/posts/thunks/get/getPaginationPost";

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
                        </>
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