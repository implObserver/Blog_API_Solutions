import { AppDispath } from "@/app/model/store/Store";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { localPostsActions } from "@/entities/element/model/slice/localPosts/slice";
import { postsActions } from "@/entities/showcasePosts/model/slice/slice";
import { useContainerContext, useEmptyContext } from "@/features/containerOS/lib";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Remove = ({ children }) => {
    const context = useContainerContext();
    const model = context.containerContext.model;
    const dispath = useDispatch<AppDispath>();
    const isEmpty = useEmptyContext();
    const index = useLocation().state;
    const keyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (isEmpty.getState() && context.containerContext.index > 2) {
            const context: CellOfPost = {
                index,
                model,
            }

            dispath(postsActions.removeModel(context));
            dispath(modlelsOfOpenedPostActions.removeModel(model))
            isEmpty.setState(false);
        }

    }

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const element = e.target as HTMLTextAreaElement;

        if (element.value === '') {
            if (e.key === 'Backspace') {
                isEmpty.setState(true);
            }
        }

    }

    return (
        <div onKeyDown={keyDownHandle} onKeyUp={keyUpHandle}>
            {children}
        </div>
    )
}