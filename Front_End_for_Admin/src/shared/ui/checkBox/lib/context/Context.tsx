import { createContext, useContext } from "react";

export const CheckBoxContext = createContext<undefined | boolean>(undefined);

export const useCheckBoxContext = () => {
    const props = useContext(CheckBoxContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a CheckBoxContext');
    }
    return props;
}