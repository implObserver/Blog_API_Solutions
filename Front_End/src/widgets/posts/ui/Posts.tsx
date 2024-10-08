import { useEffect, useState } from "react"
import { getPosts } from "../lib/helper/getPosts"
import { PostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { PostPreview } from "@/entities/postPreview";
import styles from './styles/Posts.module.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "@/app/model/store/Store";
import { postsActions } from "@/entities/user/model/slice/posts/slice";
import { getAllPosts } from "@/entities/user/model/slice/posts/thunks/get/getAllPosts";
import { selectPosts } from "@/entities/user/model/slice/posts/selectors";


export const Posts = () => {
    const posts = useSelector(selectPosts).posts;
    const dispatch = useDispatch<AppDispath>();

    const loadPosts = async () => {
        await dispatch(getAllPosts());
    };

    useEffect(() => {
        loadPosts();
    }, []);
    console.log(posts)
    const fill = () => {
        return posts.map((post, index) => {
            const postPreviewContext: PostPreviewContextType = {
                post,
            };
            return (
                <PostPreviewContext.Provider value={postPreviewContext} key={post.id}>
                    <PostPreview />
                </PostPreviewContext.Provider>
            );
        });
    };

    return (
        <div className={styles.container}>
            {fill()}
        </div>
    )
}