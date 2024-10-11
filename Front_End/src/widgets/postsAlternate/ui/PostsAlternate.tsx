import { PostPreview } from "@/entities/postPreview";
import styles from './styles/PostsAlternate.module.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "@/app/model/store/Store";
import { getAllPosts } from "@/entities/postState/model/slice/posts/thunks/get/getAllPosts";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";
import { selectTag } from "@/entities/tag";
import { PostFilterContext } from "@/features/postsFilter/lib/context/Context";
import { PostsFilter } from "@/features/postsFilter/ui/PostsFilter";
import { Tag } from "@/shared/ui/tag";
import { useEffect } from "react";
import { PostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { AlterPostPreview } from "@/entities/alterPostPreview";
import { AlterPostPreviewContext } from "@/entities/alterPostPreview/lib/context/Context";


export const PostsAlternate = () => {
    const tag = useSelector(selectTag).tag;
    const posts = useSelector(selectPosts).posts;
    const dispatch = useDispatch<AppDispath>();

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
                        </>
                    };
                    return (
                        <AlterPostPreviewContext.Provider value={postPreviewContext} key={post.id}>
                            <AlterPostPreview></AlterPostPreview>
                        </AlterPostPreviewContext.Provider>
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