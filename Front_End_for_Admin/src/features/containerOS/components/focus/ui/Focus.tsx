import { AppDispath } from "@/app/model/store/Store";
import { focusActions } from "@/entities/element";
import { selectPosts } from "@/entities/showcasePosts/model/slice/selectors";
import { useContainerContext, useEmptyContext } from "@/features/containerOS/lib";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Focus = ({ children }) => {
    const context = useContainerContext();
    const index = useLocation().state;
    const posts = useSelector(selectPosts).posts;
    const post = posts[index];

    const dispath = useDispatch<AppDispath>();
    const isEmpty = useEmptyContext();

    const keyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key == 'ArrowDown') {
            e.stopPropagation();
            e.preventDefault();
        }

        if (isEmpty.getState() && context.containerContext.index > 2) {
            if (context.containerContext.index > 0) {
                //dispath(focusActions.setFocus(context.containerContext.index - 1))
            }
        }

        if (e.key === 'ArrowUp' && context.containerContext.index > 0) {
            let index = context.containerContext.index - 1;
            const model = post.elements[index];
            if (model.type === 'preview') {
                index--;
            }
            //dispath(focusActions.setFocus(index))
        }

        if (e.key === 'ArrowDown' && context.containerContext.index < post.elements.length - 1) {
            let index = context.containerContext.index + 1;
            const model = post.elements[index];
            console.log('fooocus')
            if (model.type === 'preview') {
                index++;
            }
            //dispath(focusActions.setFocus(index))
        }
    }

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowUp' || e.key == 'ArrowDown') {
            e.stopPropagation();
            e.preventDefault();
        }

        if (e.key === 'Enter') {
            e.preventDefault();
            //dispath(focusActions.setFocus(context.containerContext.index + 1))
        }
    }

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement;
        console.log(element)
        if (element.tagName === 'svg') {
            const className = element.classList.value;
            if (className.includes('minus')) {
                dispath(focusActions.setFocus(context.containerContext.index - 1));
            }
        } else if (element.tagName === 'TEXTAREA') {
            //dispath(focusActions.setFocus(context.containerContext.index));
        }
    }

    return (
        <div
            onKeyDown={keyDownHandle}
            onKeyUp={keyUpHandle}
            onClick={clickHandle}
        >
            {children}
        </div>
    )
}