interface ServiceStatus {
    user: UserData,
    isAuthenticated: boolean,
    isLoading?: boolean,
    avatar: string,
    error?: Error,
    isUpdating?: boolean;
}

interface UserData {
    id?: number,
    emailAddress?: string,
    profile?: UserProfile,
    username: string,
}

interface UserProfile {
    name?: string,
    gender?: string,
    age?: number,
    avatar?: File,
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

interface ImageType {
    code: string,
    blob: Blob,
    isRetry?: boolean,
    version: number,
}

interface PostPreviewContextType {
    post: Post;
    tag?: React.ReactElement,
    type: string,
}