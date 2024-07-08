import { createContext, useContext } from "react";

export const ElementNodeContext = createContext<undefined | ElementNodeContextType>(undefined);

export const useElementNodeContext = () => {
    const props = useContext(ElementNodeContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ElementNodeContext');
    }
    return props;
}