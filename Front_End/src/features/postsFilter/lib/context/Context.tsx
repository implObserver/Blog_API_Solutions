import { createContext, useContext } from "react";

export const PostFilterContext = createContext<undefined | PostFilterType>(undefined);

export const usePostFilterContext = () => {
    const props = useContext(PostFilterContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PostFilterContext');
    }
    return props;
}