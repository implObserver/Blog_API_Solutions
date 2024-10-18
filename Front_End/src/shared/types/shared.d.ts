interface ImageStateContextType {
    model: ModelType<ModelSubtype>,
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
    value: ModelType<ModelSubtype>,
    maxLength?: number,
}

interface CommentAreaContextType {
    comment: CustomState<string>,
}

interface CommentContextType {
    comment: PostComment,
    features: React.ReactElement[],
    deepFeatures: React.ReactElement[],
    update?: CustomState<boolean>,
    text?: CustomState<string>,
}

interface CustomState<T> {
    toggle: () => void;
    getState: () => T;
    setState: (state: T) => void;
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