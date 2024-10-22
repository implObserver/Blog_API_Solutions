import { postsActions } from "@/entities/user";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from './styles/Posts.module.css';
import { ClassicShowcase } from "../components/classic";
import { useAppDispatch } from "@/shared/lib";
import { getPaginationPosts, selectPosts } from "@/entities/postState";
import { AlterShowcase } from "../components/alternate";

export const Posts = () => {
    const dispatch = useAppDispatch();
    const postsService = useSelector(selectPosts);
    const currentPage = postsService.currentPage;
    const totalPages = postsService.totalPages;

    const loadPosts = async () => {
        const data: PaginationData = {
            page: currentPage,
        }
        dispatch(getPaginationPosts(data));
    };

    useEffect(() => {
        loadPosts();
    }, [currentPage]);

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

    return (
        <div className={styles.container}>
            <AlterShowcase></AlterShowcase>
            <ClassicShowcase></ClassicShowcase>
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