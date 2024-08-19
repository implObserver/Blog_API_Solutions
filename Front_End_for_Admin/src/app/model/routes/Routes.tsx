import { MainPage } from "@/pages/main/ui/MainPage";
import { Post } from "@/pages/post/ui/Post";
import { store } from "../store/Store";
import { Signup } from "@/pages/signup/Signup";
import { Login } from "@/pages/login/ui/Login";

const authState = store.getState().auth;

//localStorage.clear()

const routes = [
    {
        path: "/",
        element: authState.isAuthInProgress
            ? <div>Checking auth...</div>
            : authState.isAuth
                ? <div>WELCOME!!!...</div>
                : <MainPage></MainPage>
    },
    {
        path: "/post",
        element: authState.isAuthInProgress
            ? <div>Checking auth...</div>
            : authState.isAuth
                ? <Post></Post>
                : <div>pls auth...</div>
    },
    {
        path: "/signup",
        element: authState.isAuthInProgress
            ? <div>Checking auth...</div>
            : authState.isAuth
                ? <div>you auth...</div>
                : <Signup></Signup>
    },
    {
        path: "/login",
        element: authState.isAuthInProgress
            ? <div>Checking auth...</div>
            : authState.isAuth
                ? <div>you logged...</div>
                : <Login></Login>
    },
];

export default routes;