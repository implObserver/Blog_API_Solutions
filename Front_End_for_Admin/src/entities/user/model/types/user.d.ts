interface ServicesDataType {
    user: User,
    isAuth: boolean,
    isPending?: boolean,
    avatar: string,
    error?: string,
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
    name: string,
    profile: Profile,
    posts: Post[],
}

interface Profile {
    name: String,
    gender: String,
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