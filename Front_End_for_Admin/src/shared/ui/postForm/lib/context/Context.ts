import { createContext, useContext } from "react";

export const PostFormContext = createContext<undefined | PostFormContext>(undefined);

export const usePostFormContext = () => {
    const props = useContext(PostFormContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PostFormContext');
    }
    return props;
}