import { useEffect, useState } from "react"
import { PostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { PostPreview } from "@/entities/postPreview";
import styles from './styles/Posts.module.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "@/app/model/store/Store";
import { getAllPosts } from "@/entities/user/model/slice/posts/thunks/get/getAllPosts";
import { selectPosts } from "@/entities/user/model/slice/posts/selectors";
import { selectTag } from "@/entities/tag";
import { PostFilterContext } from "@/features/postsFilter/lib/context/Context";
import { PostsFilter } from "@/features/postsFilter/ui/PostsFilter";
import { Tag } from "@/shared/ui/tag";
import { count } from "console";
import { Recent } from "../../../shared/ui/recent/ui/Recent";


export const Posts = () => {
    const tag = useSelector(selectTag).tag;
    const posts = useSelector(selectPosts).posts;
    const dispatch = useDispatch<AppDispath>();

    const loadPosts = async () => {
        await dispatch(getAllPosts());
    };

    useEffect(() => {
        loadPosts();
    }, []);

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
                        <PostPreviewContext.Provider value={postPreviewContext} key={post.id}>
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
                <Recent></Recent>
            </div>
            <div className={styles.container}>
                {fill()}
            </div>
        </div>
    )
}