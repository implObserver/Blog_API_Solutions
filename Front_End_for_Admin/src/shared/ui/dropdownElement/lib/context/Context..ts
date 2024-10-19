import { createContext, useContext } from "react";

export const DropdownContext = createContext<undefined | DropdownState>(undefined);

export const useDropdownContext = () => {
    const props = useContext(DropdownContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a DropdownContext');
    }
    return props;
}