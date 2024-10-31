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
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_SERVER_URL);

export const PaginationCommentsShowcase = () => {
    const dispatch = useAppDispatch();
    const commentsService = useSelector(selectComments);
    const comments = commentsService.comments;
    const currentPage = commentsService.currentPage;
    const totalComments = commentsService.totalComments;
    const totalPages = commentsService.totalPages;
    const isEmit = commentsService.isEmit;
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
    }, [currentPage, isEmit]);

    useEffect(() => {
        dispatch(commentsActions.setCurrentPage(1));
        loadComments();
    }, [postid, totalComments]);

    useEffect(() => {
        console.log("Setting up updateComment listener");
        socket.on('updateComment', (updatedComments) => {
            console.log("Received updateComment:", updatedComments);
            dispatch(commentsActions.updateComment(updatedComments));
        });
    
        return () => {
            socket.off('updateComment');
        };
    }, [dispatch]);

    const loadMorePostsUp = () => {
        if (currentPage < totalPages) {
            dispatch(commentsActions.setCurrentPage(currentPage + 1)); // Увеличиваем номер текущей страницы
        }
    };

    const loadMorePostsBack = () => {
        if (currentPage > 1) {
            dispatch(commentsActions.setCurrentPage(currentPage - 1)); // Увеличиваем номер текущей страницы
        }
    };

    const fill = () => {
        return comments.map(comment => {
            return <Comment key={comment.id} comment={comment}></Comment>
        })
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
                    : ''}>
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