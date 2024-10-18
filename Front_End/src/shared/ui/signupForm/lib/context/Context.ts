import { createContext, useContext } from "react";

export const SignupFormContext = createContext<undefined | SignupFormContextType>(undefined);

export const useSignupFormContext = () => {
    const props = useContext(SignupFormContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a SignupFormContext');
    }
    return props;
}