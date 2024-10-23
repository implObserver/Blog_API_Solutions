interface ServiceStatus {
    user: UserData,
    isAuthenticated: boolean,
    isLoading?: boolean,
    error?: ErrorType,
    isUpdating?: boolean;
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

interface AuthData {
    username: string,
    email: string,
    password: string,
}

interface LoginData {
    identifier: string,
    password: string,
}

interface ProfileForm {
    nickname: string,
    gender: string,
    age: number,
}