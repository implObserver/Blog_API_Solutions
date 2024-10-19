import { createContext, useContext } from "react";

export const ImageContext = createContext<undefined | ImageContext>(undefined);

export const useImageContext = () => {
    const props = useContext(ImageContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ImageContext');
    }
    return props;
}