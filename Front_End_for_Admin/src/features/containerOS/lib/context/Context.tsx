import { createContext, useContext } from "react";

export const ContainerContext = createContext<undefined | Container>(undefined);

export const useContainerContext = () => {
    const props = useContext(ContainerContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ContainerContext');
    }
    return props;
}

export const EmptyContext = createContext<undefined | StateHandler>(undefined);

export const useEmptyContext = () => {
    const props = useContext(EmptyContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a EmptyContext');
    }
    return props;
}

