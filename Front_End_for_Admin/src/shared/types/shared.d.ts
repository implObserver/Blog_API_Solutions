interface ImageStateContextType {
    model: Model<ModelVariant>,
    file: Blob,
    setImgFile?: React.Dispatch<React.SetStateAction<File>>,
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
    strongPlaceholder?: string,
    value: ElementData<ElementVariant>,
    maxLength: number,
    isFocus?: boolean,
    ref?: React.MutableRefObject<HTMLTextAreaElement | null>,
    id?: number,
    updater?: CustomState,
    index?: number,
}

interface CustomState {
    toggle: () => void;
    getState: () => any;
    setState: (state: any) => void;
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
    email: string,
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