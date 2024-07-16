import { createContext, useContext } from "react";

export const ElementContext = createContext<undefined | CanvasElement>(undefined);

export const useElementContext = () => {
    const props = useContext(ElementContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ElementContext');
    }
    return props;
}