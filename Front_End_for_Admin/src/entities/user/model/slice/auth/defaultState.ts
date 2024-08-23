import { loadToken } from "@/entities/user/api/localstorage/token/loadToken";
import { loadUser } from "@/entities/user/api/localstorage/user/loadUser";

const token = loadToken();

const defaultAuth = token === null
    ? false
    : token === undefined
        ? false
        : true;

const isPending = JSON.parse(localStorage.getItem('post_constructor_authprogress'));
const defaultPending = isPending === null ? false : isPending;

const defaultUser = {
    id: 0,
    name: 'visitor',
    token: undefined,
}

const currentUser = loadUser();

const user = currentUser === undefined
    ? defaultUser
    : currentUser === null
        ? defaultUser
        : currentUser;

export const initialState: AuthType = {
    states: {
        isAuth: defaultAuth,
        isAuthInProgress: defaultPending,
    },
    user,
}