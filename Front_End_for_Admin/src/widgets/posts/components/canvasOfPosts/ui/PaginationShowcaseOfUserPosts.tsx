import { AppDispath } from "@/app/model/store/Store";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";
import { getPostsOfUser } from "@/entities/postState/model/slice/posts/thunks/get/getPostsOfUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/CanvasOfPosts.module.css'
import { DeletePost } from "@/features/deletePost";
import { PostPreview, PostPreviewContext, snapshotSliceActions } from "@/entities/postPreview";

export const PaginationShowcaseOfUserPosts = () => {
    const dispatch = useDispatch<AppDispath>();
    const postsService = useSelector(selectPosts);
    const posts = postsService.posts;
    const currentPage = postsService.currentPage;
    const totalPosts = postsService.totalPosts;
    const totalPages = postsService.totalPages;

    const loadPosts = async () => {
        setTimeout(() => {
            const data: PaginationData = {
                page: currentPage,
            }
            dispatch(getPostsOfUser(data));
        }, 100);
    };

    useEffect(() => {
        loadPosts();
    }, [currentPage, totalPages, totalPosts]);

    const clickHandle = (post: Post) => {
        dispatch(snapshotSliceActions.initialSnapshot(post));
    }

    const loadMorePostsUp = () => {
        if (currentPage < totalPages) {
            dispatch(postsActions.setCurrentPage(currentPage + 1)); // Увеличиваем номер текущей страницы
        }
    };

    const loadMorePostsBack = () => {
        console.log(postsService.currentPage, totalPages)
        if (currentPage > 1) {
            dispatch(postsActions.setCurrentPage(currentPage - 1)); // Увеличиваем номер текущей страницы
        }
    };

    const fill = () => {
        console.log(posts)
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
    };
    console.log(currentPage)
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                {fill()}
            </div>
            <div className={styles.pagination}>
                <button className={styles.pagination_btn} onClick={loadMorePostsBack} disabled={currentPage === 1}>
                    назад
                </button>
                <span>{currentPage} из {totalPages}</span>
                <button className={styles.pagination_btn} onClick={loadMorePostsUp} disabled={currentPage === totalPages}>
                    вперед
                </button>
            </div>
        </div >
    )
};