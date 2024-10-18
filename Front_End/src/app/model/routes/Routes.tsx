import { MainLayout } from "@/app/ui/layouts/MainLayout";
import { LoginPage } from "@/pages/login";
import { MainPage } from "@/pages/main/ui/MainPage";
import { PostPage } from "@/pages/post";
import { SignupPage } from "@/pages/signup";


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
                path: "/signup",
                element: <SignupPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/post/:postid",
                element: <PostPage />,
            },
        ],
    },
];

export default routes;