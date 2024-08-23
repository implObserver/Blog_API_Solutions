interface User {
    id: number,
    name: string,
    token: string,
}

interface AuthType {
    states: AuthStates,
    user: User,
}

interface AuthStates {
    isAuth: boolean,
    isAuthInProgress: boolean,
}

interface AuthData {
    username: string,
    password: string,
}