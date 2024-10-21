interface ImageContext {
    model: Model<ModelVariant>,
    file: Blob,
    setImageFile?: React.Dispatch<React.SetStateAction<File>>,
}

interface ProfileFormContext {
    formData: ProfileForm,
    setFormData: React.Dispatch<React.SetStateAction<ProfileForm>>,
    username: string,
}

interface PostFormContext {
    data: PostForm,
    setData: React.Dispatch<React.SetStateAction<PostForm>>,
}

interface PostForm {
    title: string,
}

interface DropdownState {
    hasMargin: boolean,
    isOpen: boolean,
}

interface TextAreaProps {
    placeholder: string,
    strongPlaceholder?: string,
    value: ElementData<ElementVariant>,
    maxLength: number,
    isFocused?: boolean,
    ref?: React.MutableRefObject<HTMLTextAreaElement | null>,
    id?: number,
    updater?: StateHandler,
    index?: number,
}

interface StateHandler {
    toggle: () => void;
    getState: () => any;
    setState: (state: any) => void;
}

interface PlaceholderContext {
    isActive: boolean,
    key: string,
}

interface SignupContext {
    formData: SignupData,
    setFormData: React.Dispatch<React.SetStateAction<SignupData>>,
    formType: string,
}

interface LoginContext {
    formData: LoginData,
    setFormData: React.Dispatch<React.SetStateAction<LoginData>>,
    formType: string,
}

interface SignupData {
    username: string,
    email: string,
    password: string,
}

interface LoginData {
    identifier: string,
    password: string,
}

interface AvatarContext {
    imageUrl: string,
}