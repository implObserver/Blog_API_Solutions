import { createContext, useContext } from "react";

export const FactoryContext = createContext<undefined | FactoryContextType>(undefined);

export const useFactoryContext = () => {
    const props = useContext(FactoryContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a FactoryContext');
    }
    return props;
}