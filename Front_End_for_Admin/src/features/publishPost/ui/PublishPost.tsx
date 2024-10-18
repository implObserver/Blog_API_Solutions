import { AppDispath } from "@/app/model/store/Store"
import { virtualPostActions } from "@/entities/element";
import { updatePublishStatus } from "@/entities/postState/model/slice/openedPost/thunks/update/updatePublishStatus";

import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";

export const PublishPost = ({ children }) => {
    const dispatch = useDispatch<AppDispath>();
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