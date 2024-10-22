import { Line } from "@/shared/ui/line";
import { useSelector } from "react-redux";
import styles from './styles/Comments.module.css'
import { AddComment } from "@/features/addComment";
import { selectComments } from "@/entities/comment";
import { PaginationCommentsShowcase } from "../components/showcase";

export const Comments = () => {
    const totalComments = useSelector(selectComments).totalComments;

    return (
        <div className={styles.container}>
            <Line text={`${totalComments} Comments`}></Line>
            <div className={styles.creater}>
                <AddComment></AddComment>
            </div>

            <PaginationCommentsShowcase></PaginationCommentsShowcase>
        </div>
    )
}