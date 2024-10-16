import { AppDispath } from "@/app/model/store/Store";
import { postsActions } from "@/entities/user";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/Posts.module.css';
import { getPaginationPosts } from "@/entities/postState/model/slice/posts/thunks/get/getPaginationPost";
import { ClassicShowcase } from "../components/classic";
import { AlterShowcase } from "../components/alternate/ui/AlterShowcase";

export const Pposts = () => {
    const dispatch = useDispatch<AppDispath>();
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