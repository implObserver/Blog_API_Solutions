interface Tag {
    postid: number,
    tagName: string,
}

interface ServiceStatus {
    user: UserData,
    isAuthenticated: boolean,
    isLoading?: boolean,
    error?: Error,
    isUpdating?: boolean;
}

interface PostUpdate {
    id: number,
    models?: Model<TextModel | PreviewModel | TitleModel>[],
}

interface UpdateData {
    user: UserData,
    profile?: ProfileFormType,
    avatar?: File,
    posts?: Post,
}

interface UserData {
    id: number,
    emailAddress: string,
    username: string,
    profile: UserProfile,
}

interface UserProfile {
    name: string,
    gender: string,
    age: number,
    avatar: File,
}

interface AuthStatus {
    isAuthenticated: boolean,
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
    folderName: string,
    file: File,
}