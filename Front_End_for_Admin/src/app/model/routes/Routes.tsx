import { SignupPage } from "@/pages/signup";
import { LoginPage } from "@/pages/login";
import { PostPage } from "@/pages/post";
import { MainPage } from "@/pages/main";
import { ProfilePage } from "@/pages/profile";

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
    {
        path: "/profile/:id",
        element: <ProfilePage></ProfilePage>
    },
    {
        path: "/user/:userid/post/:postid",
        element: <PostPage></PostPage>
    },
];

export default routes;