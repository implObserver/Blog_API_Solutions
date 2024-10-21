import { createContext, useContext } from "react";

export const TitleHeaderContext = createContext<undefined | Date>(undefined);

export const useTitleHeaderContext = () => {
    const props = useContext(TitleHeaderContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a TitleHeaderContext');
    }
    return props;
}