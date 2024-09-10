import { selectUserServices, servicesActions } from "@/entities/user";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie'
import { AppDispath } from "@/app/model/store/Store";
import { snapshotSliceActions } from "@/entities/postPreview/model/slice/snapshot/slice";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { PostPreview } from "@/entities/postPreview/ui/PostPreview";
import styles from './styles/CanvasOfPosts.module.css'
import { selectSnapshot } from "@/entities/postPreview/model/slice/snapshot/selectors";
import { updatePost } from "@/entities/user/model/slice/services/thunks/update/updatePost";
import { PostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { DeletePost } from "@/features/deletePost/ui/DeletePost";
import { selectModelsOfOpenedPost } from "@/entities/element/model/slice/elementsOfPost/selectors";

export const CanvasOfPosts = () => {
    const service = useSelector(selectUserServices);
    const models = useSelector(selectModelsOfOpenedPost).models;
    const user = service.user;
    const posts = user.posts;
    const userID = Cookies.get('user_id');
    const dispatch = useDispatch<AppDispath>();
    const snapshot = useSelector(selectSnapshot).snapshot;

    useEffect(() => {
        try {
            dispatch(snapshotSliceActions.updateSnapshot(models));
            dispatch(updatePost(snapshot))
        } catch (error) {

        }
    }, [snapshot])

    const clickHandle = (post: Post) => {
        dispatch(snapshotSliceActions.initialSnapshot(post));
    }

    const fill = useMemo(() => {
        return posts.map((post, index) => {
            console.log(post.id)
            const context: PostPreviewContextType = {
                deleteFeature: <DeletePost postId={post.id}></DeletePost>,
            }
            return (
                <div className={styles.wrapper} key={post.id}>
                    <Link
                        className={styles.link}
                        onClick={() => clickHandle(post)}
                        to={`/user/${userID}/post/${post.id}`}
                        state={post.id}
                    >
                        <PostPreviewContext.Provider value={context}>
                            <PostPreview post={post}></PostPreview>
                        </PostPreviewContext.Provider>
                    </Link>
                </div>
            )
        });
    }, [posts])

    return (
        <div className={styles.container}>
            {fill}
        </div>
    )
}