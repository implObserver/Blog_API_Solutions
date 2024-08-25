import { createContext, useContext } from "react";

export const UploadContext = createContext<undefined | UploadContextType>(undefined);

export const useUploadContext = () => {
    const props = useContext(UploadContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a UploadContext');
    }
    return props;
}