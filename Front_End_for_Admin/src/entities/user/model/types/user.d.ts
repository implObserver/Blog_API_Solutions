interface UserWithToken {
    id: number,
    name: string,
    token: string,
}

interface User {
    id: number,
    name: string,
}

interface AuthStates {
    isAuth: boolean,
    isAuthInProgress: boolean,
}

interface AuthData {
    username: string,
    password: string,
}