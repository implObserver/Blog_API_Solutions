import { openedPostActions, virtualPostActions } from "@/entities/postState";
import { useContainerContext, useEmptyContext } from "@/features/containerOS/lib";
import { getVirtualPost, useAppDispatch } from "@/shared/lib";
import { useParams } from "react-router-dom";

export const Remove = ({ children }) => {
    const { containerContext } = useContainerContext();
    const { model, index: currentIndex } = containerContext;
    const dispatch = useAppDispatch();
    const isEmpty = useEmptyContext();
    const postId = parseInt(useParams().postid, 10);

    const handleKeyUp = () => {
        if (!isEmpty.getState() || currentIndex <= 2) return;
        const models = getVirtualPost().models;
        const updateContext: UpdateModels = { postid: postId, models };
        const cellContext: PostCell = { postid: postId, model };

        dispatch(virtualPostActions.removeModel(model));
        dispatch(openedPostActions.updateModels(updateContext));
        dispatch(openedPostActions.removeModel(cellContext));

        isEmpty.setState(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const element = e.target as HTMLTextAreaElement;
        if (element.value === '' && e.key === 'Backspace') {
            isEmpty.setState(true);
        }
    };

    return (
        <div onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
            {children}
        </div>
    );
};