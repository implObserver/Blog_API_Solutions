import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from './styles/CanvasOfPosts.module.css'

import {
    getPostsOfUser,
    openedPostActions,
    postsActions,
    selectBackups,
    selectPosts,
    virtualPostActions
} from "@/entities/postState";
import { useAppDispatch } from "@/shared/lib";
import { Post } from "../components/post";

export const PaginationShowcaseOfUserPosts = () => {
    const dispatch = useAppDispatch();
    const postsService = useSelector(selectPosts);
    const posts: Post[] = postsService.posts;
    const currentPage = postsService.currentPage;
    const backups = useSelector(selectBackups).backups;

    const totalPages = postsService.totalPages;
    const totalPosts = postsService.totalPosts;
    const loadPosts = async () => {
        const data: PaginationData = {
            page: currentPage,
        }
        dispatch(getPostsOfUser(data));
    };

    useEffect(() => {
        loadPosts();
    }, [totalPosts, currentPage]);

    const loadMorePostsUp = () => {
        if (currentPage < totalPages) {
            dispatch(postsActions.setCurrentPage(currentPage + 1)); // Увеличиваем номер текущей страницы
        }
    };

    const loadMorePostsBack = () => {
        if (currentPage > 1) {
            dispatch(postsActions.setCurrentPage(currentPage - 1)); // Увеличиваем номер текущей страницы
        }
    };

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>, post: Post) => {
        const element = e.target as HTMLLinkElement;

        if (element.tagName === 'IMG') {
            dispatch(openedPostActions.setOpenedPost(post));
            dispatch(virtualPostActions.setPost(post));
        }
    }

    const fill = () => {
        return posts.map((post, index) => {
            const backupIndex = backups.findIndex(backup => backup.id === post.id);
            const actualPost = backupIndex === -1
                ? post
                : backups[backupIndex]

            return (
                <div onClick={(e) => clickHandle(e, actualPost)} className={styles.wrapper} key={post.id}>
                    <Post post={actualPost}></Post>
                </div>
            )
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                {fill()}
            </div>
            <div className={styles.pagination}>
                <button className={currentPage === 1
                    ? styles.block
                    : styles.pagination_btn}
                    onClick={loadMorePostsBack}>
                    назад
                </button>
                <span className={totalPages === 1
                    ? styles.block
                    : styles.total_pages}>
                    {currentPage} / {totalPages}
                </span>
                <button
                    className={totalPages === currentPage
                        ? styles.block
                        : styles.pagination_btn}
                    onClick={loadMorePostsUp}>
                    вперед
                </button>
            </div>
        </div >
    )
};