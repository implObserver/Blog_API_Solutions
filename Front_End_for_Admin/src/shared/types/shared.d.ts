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

interface SignupFormContextType {
    data: SignupType,
    setData: React.Dispatch<React.SetStateAction<SignupType>>,
    type: string,
}

interface LoginFormContextType {
    data: LoginType,
    setData: React.Dispatch<React.SetStateAction<LoginType>>,
    type: string,
}

interface SignupType {
    username: string,
    email: string,
    password: string,
}

interface LoginType {
    identifier: string,
    password: string,
}

interface AvatarContextType {
    image: string,
}