interface ImageStateContextType {
    file: File,
    setImgFile: React.Dispatch<React.SetStateAction<File>>,
}

interface DropdownContextType {
    margin: boolean,
    state: boolean,
    canvas: CustomState,
}

interface TextAreaContextType {
    placeholder: string,
    value: ElementType<Title | TextArea | Preview>,
    maxLength: number,
    isFocus: boolean,
}

interface CustomState {
    toggle: () => void;
    getState: () => boolean;
    setState: (state: boolean) => void;
}

interface PlugContextType {
    state: boolean,
    index: string,
}

/*interface ElementNodeContextType {
    setElements: React.Dispatch<React.SetStateAction<React.ReactElement[]>>,
    elements: Array<React.ReactElement>,
    index: number,
}*/