import { createContext, useContext } from "react";

export const CommentsShowcaseContext = createContext<undefined | Post>(undefined);

export const useCommentsShowcaseContext = () => {
    const props = useContext(CommentsShowcaseContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a CommentsShowcaseContext');
    }
    return props;
}