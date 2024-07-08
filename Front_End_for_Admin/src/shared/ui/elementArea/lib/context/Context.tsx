import { createContext, useContext } from "react";

export const ElementAreaContext = createContext<undefined | string>(undefined);

export const useElementAreaContext = () => {
    const props = useContext(ElementAreaContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ElementAreaContext');
    }
    return props;
}