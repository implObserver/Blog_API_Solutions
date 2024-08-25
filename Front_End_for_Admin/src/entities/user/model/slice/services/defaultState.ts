import { loadToken } from "@/entities/user/api/localstorage/token/loadToken";
import { loadUser } from "@/entities/user/api/localstorage/user/loadUser";
import { profile } from "console";

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
    profile: null,
}

const currentUser = loadUser();

const user = currentUser === undefined
    ? defaultUser
    : currentUser === null
        ? defaultUser
        : currentUser;

export const initialState: ServicesDataType = {
    isAuth: defaultAuth,
    isPending: defaultPending,
    user,
}