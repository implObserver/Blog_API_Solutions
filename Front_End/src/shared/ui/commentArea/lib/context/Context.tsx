import { createContext, useContext } from "react";

export const CommentAreaContext = createContext<undefined | CommentAreaContextType>(undefined);

export const useCommentAreaContext = () => {
    const props = useContext(CommentAreaContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a CommentAreaContext');
    }
    return props;
}