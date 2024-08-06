import { createContext, useContext } from "react";

export const FocusContext = createContext<undefined | Container>(undefined);

export const useFocusContext = () => {
    const props = useContext(FocusContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a FocusContext');
    }
    return props;
}