interface ServicesDataType {
    user: User,
    isAuth: boolean,
    isPending?: boolean,
    avatar: string,
    error?: Error,
    isUpdate?: boolean;
}

interface PostUpdate {
    id: number,
    models?: ModelType<TextAreaModel | PreviewModel | TitleModel>[],
}

interface UpdateData {
    user: User,
    profile?: ProfileFormType,
    avatar?: File,
    posts?: Post,
}

interface User {
    id: number,
    email: string,
    profile: Profile,
    posts: Post[],
}

interface Profile {
    name: string,
    gender: string,
    age: number,
    avatar: File,
}

interface AuthType {
    isAuth: boolean,
    isAuthInProgress: boolean,
}

interface AuthData {
    email: string,
    password: string,
}

interface ImageUpdate {
    nameFolder: string,
    file: File,
}

//


interface PostImages {
    post_id: number;
    images: Array<ImageType>;
}
interface ImageType {
    code: string,
    blob: Blob,
    isRetry?: boolean,
}
interface Post {
    id: number,
    title: string,
    postingDate: Date,
    isPublished: boolean,
    tag: String,
    elements: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>,
    comments: Comment[]
}

interface Posts {
    error?: Error,
    isPending?: Boolean,
    posts: Post[],
}

interface Comment {
    postingDate: Date,
    text: String,
}

interface CellOfPost {
    post_id?: number,
    newModel?: ModelType<TextAreaModel | PreviewModel | TitleModel>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}

interface UpdateModels {
    post_id: number,
    models: ModelType<TextAreaModel | PreviewModel | TitleModel>[],
}

interface PostPreviewContextType {
    post: Post;
}

//

interface Focus {
    index: Number,
}

interface UpdateElement {
    newModel: ModelType<ModelSubtype>,
    model: ModelType<ModelSubtype>,
}

interface ModelPanelContextType {
    visible: Boolean,
}

interface ModelContainerContextType {
    type: string,
    nNum: string,
    value: ElementValueType,
}

interface ValueContainerContextType {
    value: ElementValueType,
}

interface ElementValueType {
    setValue: (val: string) => void;
    getValue: () => string;
}