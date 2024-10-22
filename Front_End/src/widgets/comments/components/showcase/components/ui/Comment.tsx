import { EntityComment } from "@/entities/comment";
import { selectUserServices } from "@/entities/user";
import { DeleteComment } from "@/features/deleteComment";
import { EditComment } from "@/features/editComment";
import { UpdateComment } from "@/features/updateComment";
import { useCustomState } from "@/shared/lib";
import { CommentContext } from "@/shared/ui/comment";
import { useSelector } from "react-redux";

export const Comment = ({ comment }) => {
    const update = useCustomState();
    const text = useCustomState(comment.text);
    const userService = useSelector(selectUserServices);
    const user = userService.user;
    const isMycomment = userService.isAuthenticated
        ? user.id === comment.user.id
            ? true
            : false
        : false;

    const context: CommentContextType = {
        comment,
        features: [
            <EditComment></EditComment>,
            <DeleteComment></DeleteComment>,
        ],
        deepFeatures: [
            <UpdateComment></UpdateComment>
        ],
        update,
        text,
    }

    return (
        <div key={comment.id}>
            <CommentContext.Provider value={context}>
                <EntityComment isMyComment={isMycomment}></EntityComment>
            </CommentContext.Provider>
        </div>
    )
}