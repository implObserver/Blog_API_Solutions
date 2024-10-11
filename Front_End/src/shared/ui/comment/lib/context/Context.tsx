import { createContext, useContext } from "react";

export const CommentContext = createContext<undefined | CommentContextType>(undefined);

export const useCommentContext = () => {
    const props = useContext(CommentContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a CommentContext');
    }
    return props;
}