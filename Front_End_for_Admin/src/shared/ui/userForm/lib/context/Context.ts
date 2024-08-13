import { createContext, useContext } from "react";

export const UserFormContext = createContext<undefined | UserFormContextType>(undefined);

export const useUserFormContext = () => {
    const props = useContext(UserFormContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a UserFormContext');
    }
    return props;
}