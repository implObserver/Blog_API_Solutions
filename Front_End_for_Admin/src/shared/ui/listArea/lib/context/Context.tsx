import { createContext, useContext } from "react";

export const ListAreaContext = createContext<undefined | TextAreaProps>(undefined);

export const useListAreaContext = () => {
    const props = useContext(ListAreaContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a TextAreaContext');
    }
    return props;
}