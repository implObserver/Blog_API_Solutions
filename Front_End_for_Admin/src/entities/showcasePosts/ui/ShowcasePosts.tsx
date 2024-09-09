import { Link } from "react-router-dom";
import { useShowcasePostsContext } from "../lib/context/Context"
import Cookies from "js-cookie";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSnapshot } from "@/entities/showcasePosts/model/slice/snapshot/selectors";
import { selectModelsOfOpenedPost } from "@/entities/element/model/slice/elementsOfPost/selectors";
import { AppDispath } from "@/app/model/store/Store";
import { snapshotSliceActions } from "../model/slice/snapshot/slice";
import { PostPreview } from "../components/ui/PostPreview";
import styles from './styles/ShowcasePosts.module.css'

export const ShowcasePosts = () => {
    const context = useShowcasePostsContext();
    const userID = Cookies.get('user_id');

    const dispatch = useDispatch<AppDispath>();

    const clickHandle = (post: Post) => {
        dispatch(snapshotSliceActions.initialSnapshot(post));
        console.log(`poooost: ${post}`);
    }

    const fill = useMemo(() => {
        return context.map((post, index) => {
            const count = ++index;
            console.log(count)
            return (
                <div key={post.id}>
                    <Link
                        className={styles.link}
                        onClick={() => clickHandle(post)}
                        to={`/user/${userID}/post/${post.id}`}
                        state={post.id}
                    >
                        <PostPreview post={post}></PostPreview>
                    </Link>
                </div>
            )
        });
    }, [])

    return (
        <div className={styles.container}>
            {fill}
        </div>
    )
}