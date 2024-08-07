import { createContext, useContext } from "react";

export const ElementListContext = createContext<undefined | ElementListContextType>(undefined);

export const useElementListContext = () => {
    const props = useContext(ElementListContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ElementListContext');
    }
    return props;
}