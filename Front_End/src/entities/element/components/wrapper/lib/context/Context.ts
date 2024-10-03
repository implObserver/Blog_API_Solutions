import { createContext, useContext } from "react";

export const WrapperContext = createContext<undefined | WrapperContextType>(undefined);

export const useWrapperContext = () => {
    const props = useContext(WrapperContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a WrapperContext');
    }
    return props;
}