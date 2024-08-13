import { MainPage } from "@/pages/main/ui/MainPage";
import { Post } from "@/pages/post/ui/Post";

const routes = [
    {
        path: "/",
        element: <MainPage></MainPage>
    },
    {
        path: "/post",
        element: <Post></Post>
    },
];

export default routes;