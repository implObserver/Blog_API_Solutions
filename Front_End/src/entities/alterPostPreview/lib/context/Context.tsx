import { createContext, useContext } from "react";

export const AlterPostPreviewContext = createContext<undefined | PostPreviewContextType>(undefined);

export const useAlterPostPreviewContext = () => {
    const props = useContext(AlterPostPreviewContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a AlterPostPreviewContext');
    }
    return props;
}