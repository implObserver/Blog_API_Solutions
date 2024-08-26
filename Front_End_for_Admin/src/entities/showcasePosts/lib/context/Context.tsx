import { createContext, useContext } from "react";

export const showcasePostsContext = createContext<undefined | Post[]>(undefined);

export const useShowcasePostsContext = () => {
    const props = useContext(showcasePostsContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a showcasePostsContext');
    }
    return props;
}