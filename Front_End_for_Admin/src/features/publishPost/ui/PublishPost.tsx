import { virtualPostActions } from "@/entities/postState";
import { updatePublishStatus } from "@/entities/postState/model/slice/openedPost/thunks/put/updatePublishStatus";
import { useAppDispatch } from "@/shared/lib";
import { useParams } from "react-router-dom";

export const PublishPost = ({ children }) => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const postid = parseInt(params.postid);

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLInputElement;
        const updatePublish: UpdatePublishStatus = {
            postid,
            status: element.checked,
        }
        dispatch(virtualPostActions.updatePublishStatus(element.checked));
        dispatch(updatePublishStatus(updatePublish));
    }

    return (
        <div onClick={clickHandle}>
            {children}
        </div>
    )
}