interface ImageStateContextType {
    file: File,
    setImgFile: React.Dispatch<React.SetStateAction<File>>,
}

interface DropdownContextType {
    margin: boolean,
    state: boolean,
}

interface TextAreaContextType {
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    maxLength: number,
}

/*interface ElementNodeContextType {
    setElements: React.Dispatch<React.SetStateAction<React.ReactElement[]>>,
    elements: Array<React.ReactElement>,
    index: number,
}*/