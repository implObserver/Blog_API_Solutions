import { createContext, useContext } from "react";

export const CodeAreaContext = createContext<undefined | TextAreaContextType>(undefined);

export const useCodeAreaContext = () => {
    const props = useContext(CodeAreaContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a CodeAreaContext');
    }
    return props;
}