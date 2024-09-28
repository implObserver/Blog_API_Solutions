import { SignupPage } from "@/pages/signup";
import { LoginPage } from "@/pages/login";
import { PostPage } from "@/pages/post";
import { MainPage } from "@/pages/main";
import { ProfilePage } from "@/pages/profile";

import MainLayout from "@/app/ui/layouts/MainLayout";
import { SuccVerifyPage } from "@/pages/succVerify/ui/SuccVerifyPage";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <MainPage />,
            },
            {
                path: "/succesfullEmailVerify",
                element: <SuccVerifyPage />,
            },
            {
                path: "/post",
                element: <PostPage />,
            },
            {
                path: "/signup",
                element: <SignupPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/profile/:id",
                element: <ProfilePage />,
            },
            {
                path: "/user/:userid/post/:postid",
                element: <PostPage />,
            },
        ],
    },
];

export default routes;