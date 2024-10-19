import { createContext, useContext } from "react";

export const TextAreaContext = createContext<undefined | TextAreaProps>(undefined);

export const useTextAreaContext = () => {
    const props = useContext(TextAreaContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a TextAreaContext');
    }
    return props;
}