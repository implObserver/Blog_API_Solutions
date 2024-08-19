import { loadToken } from "@/entities/signupForm/api/localStorage/loadToken";

const token = loadToken();
const defaultAuth = token === null
    ? false
    : token === undefined
        ? false
        : true;

const isPending = JSON.parse(localStorage.getItem('post_constructor_authprogress'));
console.log(isPending)
const defaultPending = isPending === null ? false : isPending;

export const initialState: AuthStates = {
    isAuth: defaultAuth,
    isAuthInProgress: defaultPending,
}