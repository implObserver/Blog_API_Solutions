import { AppDispath } from "@/app/model/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { selectComments } from "../model/slice/comments/selectors";
import { useParams } from "react-router-dom";
import { getPaginationComments } from "../model/slice/comments/thunks/get/getPaginationComments";
import { useEffect } from "react";
import { commentsActions } from "../model/slice/comments/slice";
import { CommentContext } from "@/shared/ui/comment/lib/context/Context";
import { Comment } from "@/shared/ui/comment/ui/Comment";
import styles from './styles/CommentsShowcase.module.css'

export const PaginationCommentsShowcase = () => {
    const dispatch = useDispatch<AppDispath>();
    const commentsService = useSelector(selectComments);
    const comments = commentsService.comments;
    const currentPage = commentsService.currentPage;
    const totalComments = commentsService.totalComments;
    const totalPages = commentsService.totalPages;
    const update = commentsService.update;
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
        loadComments();
        dispatch(commentsActions.setCurrentPage(1));
    }, [postid])

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
            const context: CommentContextType = {
                comment,
            }
            return (
                <div key={comment.id}>
                    <CommentContext.Provider value={context}>
                        <Comment></Comment>
                    </CommentContext.Provider>
                </div>
            )
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