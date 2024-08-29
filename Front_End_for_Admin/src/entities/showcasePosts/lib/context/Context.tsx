import { createContext, useContext } from "react";

export const ShowcasePostsContext = createContext<undefined | Post[]>(undefined);

export const useShowcasePostsContext = () => {
    const props = useContext(ShowcasePostsContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ShowcasePostsContext');
    }
    return props;
}