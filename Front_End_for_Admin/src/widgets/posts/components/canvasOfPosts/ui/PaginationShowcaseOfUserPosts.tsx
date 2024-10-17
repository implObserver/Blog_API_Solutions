import { AppDispath } from "@/app/model/store/Store";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";
import { getPostsOfUser } from "@/entities/postState/model/slice/posts/thunks/get/getPostsOfUser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/CanvasOfPosts.module.css'
import { DeletePost } from "@/features/deletePost";
import { PostPreview, PostPreviewContext, snapshotSliceActions } from "@/entities/postPreview";
import { modlelsOfOpenedPostActions } from "@/entities/element";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { selectUserServices } from "@/entities/user";
import { Post } from "../components/post/ui/Post";

export const PaginationShowcaseOfUserPosts = () => {
    const dispatch = useDispatch<AppDispath>();
    const user = useSelector(selectUserServices).user;
    const postsService = useSelector(selectPosts);
    const posts = postsService.posts;
    const currentPage = postsService.currentPage;
    const totalPosts = postsService.totalPosts;
    const totalPages = postsService.totalPages;

    const loadPosts = async () => {
        const data: PaginationData = {
            page: currentPage,
        }
        dispatch(getPostsOfUser(data));
    };

    useEffect(() => {
        setTimeout(() => {
            loadPosts();
        }, 100);
    }, [currentPage, totalPages, totalPosts]);

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
            dispatch(modlelsOfOpenedPostActions.uploadPosts(post.elements));
            if (post.author === '') {
                dispatch(modlelsOfOpenedPostActions.updateAuthor(user.profile.name));
            }
        }
    }

    const fill = () => {
        return posts.map((post, index) => {
            return (
                <div onClick={(e) => clickHandle(e, post)} className={styles.wrapper} key={post.id}>
                    <Post post={post}></Post>
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