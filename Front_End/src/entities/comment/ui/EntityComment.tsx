import { AppDispath } from "@/app/model/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { selectComments } from "../model/slice/comments/selectors";
import { useParams } from "react-router-dom";
import { getPaginationComments } from "../model/slice/comments/thunks/get/getPaginationComments";
import { useEffect } from "react";
import { commentsActions } from "../model/slice/comments/slice";
import { CommentContext, useCommentContext } from "@/shared/ui/comment/lib/context/Context";
import { Comment } from "@/shared/ui/comment/ui/Comment";
import styles from './styles/EntityComment.module.css'
import { ButtonForActionMenu } from "@/shared/ui/buttonForActionMenu/ui/ButtonForActionMenu";
import { Menu } from "../components/menu/ui/Menu";

export const EntityComment = () => {
    const context = useCommentContext();
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Menu></Menu>
            </div>
            <div className={styles.comment}>
                <Comment></Comment>
            </div>
        </div >
    )
};