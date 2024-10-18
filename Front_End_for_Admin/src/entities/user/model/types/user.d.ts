interface TagDataType {
    postid: number,
    tag: string,
}

interface ServicesDataType {
    user: User,
    isAuth: boolean,
    isPending?: boolean,
    error?: Error,
    isUpdate?: boolean;
}

interface PostUpdate {
    id: number,
    models?: Model<TextModel | PreviewModel | TitleModel>[],
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