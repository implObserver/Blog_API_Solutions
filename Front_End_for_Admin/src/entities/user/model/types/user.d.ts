interface ServicesDataType {
    user: User,
    isAuth: boolean,
    isPending: boolean,
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
    token: string,
    profile: Profile,
    posts: Post,
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
    username: string,
    password: string,
}