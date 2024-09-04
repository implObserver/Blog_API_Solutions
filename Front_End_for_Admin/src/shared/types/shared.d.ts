interface ImageStateContextType {
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
    file: File,
    setImgFile: React.Dispatch<React.SetStateAction<File>>,
}

interface ProfileFormContextType {
    data: ProfileFormType,
    setData: React.Dispatch<React.SetStateAction<ProfileFormType>>,
    username: string,
}

interface PostFormContextType {
    data: PostFormType,
    setData: React.Dispatch<React.SetStateAction<PostFormType>>,
}

interface ProfileFormType {
    nickname: string,
    gender: string,
    age: number,
}

interface PostFormType {
    title: string,
}

interface DropdownContextType {
    margin: boolean,
    state: boolean,
}

interface TextAreaContextType {
    placeholder: string,
    value: ElementType<Title | TextArea | Preview>,
    maxLength: number,
    isFocus: boolean,
    ref?: React.MutableRefObject<HTMLTextAreaElement | null>,
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

interface UserFormContextType {
    data: userFormType,
    setData: React.Dispatch<React.SetStateAction<userFormType>>,
    type: string,
}

interface userFormType {
    username: string,
    password: string,
}

interface AvatarContextType {
    image: string,
}

/*interface ElementNodeContextType {
    setElements: React.Dispatch<React.SetStateAction<React.ReactElement[]>>,
    elements: Array<React.ReactElement>,
    index: number,
}*/