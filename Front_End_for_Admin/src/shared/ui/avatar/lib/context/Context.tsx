import { createContext, useContext } from "react";

export const AvatarContext = createContext<undefined | AvatarContextType>(undefined);

export const useAvatarContext = () => {
    const props = useContext(AvatarContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a AvatarContext');
    }
    return props;
}