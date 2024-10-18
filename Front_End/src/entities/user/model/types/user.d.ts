interface ServicesDataType {
    user: User,
    isAuth: boolean,
    isPending?: boolean,
    avatar: string,
    error?: Error,
    isUpdate?: boolean;
}

interface PaginationData {
    page: number,
    postid?: number,
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
    id?: number,
    email?: string,
    profile?: Profile,
    posts?: Post[],
}

interface Profile {
    name?: string,
    gender?: string,
    age?: number,
    avatar?: File,
}

interface AuthType {
    isAuth: boolean,
    isAuthInProgress: boolean,
}

interface AuthData {
    username: string,
    email: string,
    password: string,
}

interface LoginData {
    identifier: string,
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
    tag: string,
    models: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>,
    comments: PostComment[]
    author: string,
    user?: User,
}

interface Posts {
    error?: Error,
    isPending?: Boolean,
    posts: Post[],
    currentPage: number,
    totalPages: number,
}

interface Comments {
    error: Error,
    comments: PostComment[],
    isPending?: boolean,
    totalPages: number,
    currentPage: number,
    totalComments: number,
    isUpdate?: boolean,
    updatingDate?: Date,
}

interface PostComment {
    id?: number,
    postingDate?: Date,
    text: string,
    post_id?: string,
    user?: User,
    isUpdate?: boolean,
    updatingDate?: Date,
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
    tag?: React.ReactElement,
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