import { store } from "../store/Store";
import { HomePage } from "@/pages/home";
import { SignupPage } from "@/pages/signup";
import { LoginPage } from "@/pages/login";
import { PostPage } from "@/pages/post";
import { MainPage } from "@/pages/main";

const authState = store.getState().auth;

//localStorage.clear()

const routes = [
    {
        path: "/",
        element: authState.isAuthInProgress
            ? <div>Checking auth...</div>
            : authState.isAuth
                ? <HomePage></HomePage>
                : <MainPage></MainPage>
    },
    {
        path: "/post",
        element: authState.isAuthInProgress
            ? <div>Checking auth...</div>
            : authState.isAuth
                ? <PostPage></PostPage>
                : <div>pls auth...</div>
    },
    {
        path: "/signup",
        element: authState.isAuthInProgress
            ? <div>Checking auth...</div>
            : authState.isAuth
                ? <div>you auth...</div>
                : <SignupPage></SignupPage>
    },
    {
        path: "/login",
        element: authState.isAuthInProgress
            ? <div>Checking auth...</div>
            : authState.isAuth
                ? <div>you logged...</div>
                : <LoginPage></LoginPage>
    },
];

export default routes;