import { selectUserServices, updatePost } from "@/entities/user";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie'
import { AppDispath } from "@/app/model/store/Store";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from './styles/CanvasOfPosts.module.css';
import { DeletePost } from "@/features/deletePost";
import {
    PostPreview,
    PostPreviewContext,
    selectSnapshot,
    snapshotSliceActions
} from "@/entities/postPreview";

export const CanvasOfPosts = () => {
    const service = useSelector(selectUserServices);
    const user = service.user;
    const posts = user.posts;
    const dispatch = useDispatch<AppDispath>();

    const clickHandle = (post: Post) => {
        dispatch(snapshotSliceActions.initialSnapshot(post));
    }

    const fill = useMemo(() => {
        return posts.map((post, index) => {
            const context: PostPreviewContextType = {
                features: [
                    <DeletePost postId={post.id}></DeletePost>,
                    <div>Редактировать</div>
                ],
                deleteFeature: <DeletePost postId={post.id}></DeletePost>,
            }
            return (
                <div onClick={() => clickHandle(post)} className={styles.wrapper} key={post.id}>
                    <PostPreviewContext.Provider value={context}>
                        <PostPreview post={post}></PostPreview>
                    </PostPreviewContext.Provider>
                </div>
            )
        });
    }, [posts])

    return (
        <div className={styles.container}>
            
        </div>
    )
}