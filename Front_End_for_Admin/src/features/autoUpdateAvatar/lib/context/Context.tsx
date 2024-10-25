import { createContext, useContext } from "react";

export const UserAvatarContext = createContext<undefined | ServiceStatus>(undefined);

export const useUserAvatarContext = () => {
    const props = useContext(UserAvatarContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a UserAvatarContext');
    }
    return props;
}