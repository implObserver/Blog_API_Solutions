import { AppDispath } from "@/app/model/store/Store";
import {
    focusActions,
} from "@/entities/element";
import { getVirtualPost } from "@/entities/element/lib/helper/getVirtualPost";
import { useContainerContext, useEmptyContext } from "@/features/containerOS/lib";
import { useDispatch } from "react-redux";

export const Focus = ({ children }) => {
    const { containerContext } = useContainerContext();
    const dispatch = useDispatch<AppDispath>();
    const isEmpty = useEmptyContext();
    const currentIndex = containerContext.index;

    const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const models = getVirtualPost().models;
        const { key } = e;
        if (key === 'ArrowUp' || key === 'ArrowDown') {
            e.stopPropagation();
            e.preventDefault();
        }

        if (isEmpty.getState() && currentIndex > 2) {
            dispatch(focusActions.setFocus(currentIndex - 1));
        }

        if (key === 'ArrowUp' && currentIndex > 0) {
            let newIndex = currentIndex - 1;
            const model = models[newIndex];
            if (['preview', 'view', 'code'].includes(model.type)) {
                newIndex--;
            }
            dispatch(focusActions.setFocus(newIndex));
        }

        if (key === 'ArrowDown') {
            let newIndex = currentIndex + 1;
            if (newIndex < models.length) {
                const model = models[newIndex];
                if (['preview', 'view', 'code'].includes(model.type)) {
                    newIndex++;
                }
                dispatch(focusActions.setFocus(newIndex));
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const models = getVirtualPost().models;
        const { key } = e;
        const model = models[currentIndex];

        if (key === 'ArrowUp' || key === 'ArrowDown') {
            e.stopPropagation();
            e.preventDefault();
        }

        if (key === 'Enter' && model.type !== 'code') {
            e.preventDefault();
            dispatch(focusActions.setFocus(currentIndex + 1));
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement;
        const tagName = element.tagName.toLowerCase();

        if (tagName === 'svg' && element.classList.contains('minus')) {
            dispatch(focusActions.setFocus(currentIndex - 1));
        } else if (tagName === 'textarea') {
            dispatch(focusActions.setFocus(currentIndex));
        }
    };

    return (
        <div
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onClick={handleClick}
        >
            {children}
        </div>
    );
};