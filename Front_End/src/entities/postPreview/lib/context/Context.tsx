import { createContext, useContext } from "react";

export const PostPreviewContext = createContext<undefined | PostPreviewContextType>(undefined);

export const usePostPreviewContext = () => {
    const props = useContext(PostPreviewContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PostPreviewContext');
    }
    return props;
}