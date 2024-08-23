import { SignupPage } from "@/pages/signup";
import { LoginPage } from "@/pages/login";
import { PostPage } from "@/pages/post";
import { MainPage } from "@/pages/main";

//localStorage.clear()
const routes = [
    {
        path: "/",
        element: <MainPage></MainPage>
    },
    {
        path: "/post",
        element: <PostPage></PostPage>
    },
    {
        path: "/signup",
        element: <SignupPage></SignupPage>
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>
    },
];

export default routes;