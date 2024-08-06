import { createContext, useContext } from "react";

export const EmptyContext = createContext<undefined | CustomState>(undefined);

export const useEmptyContext = () => {
    const props = useContext(EmptyContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a EmptyContext');
    }
    return props;
}