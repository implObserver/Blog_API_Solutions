import { createContext, useContext } from "react";

export const ProfileFormContext = createContext<undefined | ProfileFormContextType>(undefined);

export const useProfileFormContext = () => {
    const props = useContext(ProfileFormContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ProfileFormContext');
    }
    return props;
}