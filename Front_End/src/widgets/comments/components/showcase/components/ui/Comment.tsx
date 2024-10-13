import { EntityComment } from "@/entities/comment/ui/EntityComment";
import { DeleteComment } from "@/features/deleteComment/ui/DeleteComment";
import { EditComment } from "@/features/editComment/ui/EditComment";
import { UpdateComment } from "@/features/updateComment/ui/UpdateComment";
import { useCustomState } from "@/shared/lib";
import { CommentContext } from "@/shared/ui/comment/lib/context/Context";

export const Comment = ({comment}) => {
    const update = useCustomState();
    const text = useCustomState(comment.text);

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
                <EntityComment></EntityComment>
            </CommentContext.Provider>
        </div>
    )
}