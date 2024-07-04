import { createContext, useContext } from "react";

export const TagContext = createContext<undefined | string>(undefined);

export const useTagContext = () => {
    const props = useContext(TagContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a TagContext');
    }
    return props;
}