import { SignupPage } from "@/pages/signup";
import { LoginPage } from "@/pages/login";
import { PostPage } from "@/pages/post";
import { MainPage } from "@/pages/main";
import { ProfilePage } from "@/pages/profile";
//<ScrollRestoration getKey={(location) => location.pathname} />
//localStorage.clear()
import MainLayout from "@/app/ui/layouts/MainLayout"; // Импортируем MainLayout

const routes = [
    {
        path: "/",
        element: <MainLayout />, // Используем MainLayout
        children: [
            {
                path: "", // Это будет основной контент для главной страницы
                element: <MainPage />,
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