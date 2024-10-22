import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from './styles/CommentsShowcase.module.css'
import { useAppDispatch } from "@/shared/lib";
import {
    commentsActions,
    getPaginationComments,
    selectComments
} from "@/entities/comment";
import { Comment } from "../components";

export const PaginationCommentsShowcase = () => {
    const dispatch = useAppDispatch();
    const commentsService = useSelector(selectComments);
    const comments = commentsService.comments;
    const currentPage = commentsService.currentPage;
    const totalComments = commentsService.totalComments;
    const totalPages = commentsService.totalPages;
    const postid = parseInt(useParams().postid);

    const loadComments = async () => {
        const data: PaginationData = {
            page: currentPage,
            postid,
        }
        dispatch(getPaginationComments(data));
    };

    useEffect(() => {
        loadComments();
    }, [currentPage, totalComments]);

    useEffect(() => {
        dispatch(commentsActions.setCurrentPage(1));
        loadComments();
    }, [postid, totalComments])

    const loadMorePostsUp = () => {
        if (currentPage < totalPages) {
            dispatch(commentsActions.setCurrentPage(currentPage + 1)); // Увеличиваем номер текущей страницы
        }
    };

    const loadMorePostsBack = () => {
        console.log(commentsService.currentPage, totalPages)
        if (currentPage > 1) {
            dispatch(commentsActions.setCurrentPage(currentPage - 1)); // Увеличиваем номер текущей страницы
        }
    };

    const fill = () => {
        return comments.map(comment => {
            return <Comment key={comment.id} comment={comment}></Comment>
        })
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